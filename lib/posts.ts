import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const resourcesDirectory = path.join(process.cwd(), 'posts/resources')

const blogDirectory = path.join(process.cwd(), 'posts/blog')

export function getAllSortedPostsData() {

  const sortedBlogs = getSortedBlogData()
  const sortedResources = getAllResourcesData()

  // join the both postsData into one array 
  const allPostsData = sortedResources.concat(sortedBlogs)

  return allPostsData.sort((a, b) => {
    if(a.date > b.date) return 1
    else return -1
  })
} 

export function getSortedBlogData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(blogDirectory)
  const allBlogData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(blogDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { 
        date: string; 
        title: string; 
        authors: string;
        imgSrc: string; 
        blurb: string;
        priority: number;
        type: string;
      })
    }
  })
  // Sort posts by date
  return allBlogData.sort((a, b) => {
    if (a.priority == b.priority) {
      if(a.date > b.date) return 1
      else return -1
    } else {
      if(a.priority > b.priority) return -1 // if a has higher priority than b
      else return 1
    }
  })
}

export function getSortedResourcesData(section: string) {

  const resourcesSectionDirectory = `${resourcesDirectory}/${section}`

  const fileNames = fs.readdirSync(resourcesSectionDirectory)
  const resourcesData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(resourcesSectionDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    return {
      id,
      ...(matterResult.data as { 
        date: string; 
        title: string; 
        authors: string;
        imgSrc: string; 
        blurb: string;
        type: string;
      })
    }
  })

  return resourcesData.sort((a, b) => {
    if(a.date > b.date) return 1
    else return -1
  })

}

export function getAllResourcesData() {
  // Get file names under /posts
  const folderNames = fs.readdirSync(resourcesDirectory)
  // join all the data together
  let allResourcesData = []

  folderNames.forEach(folderName => {
    const sectionData = getSortedResourcesData(folderName)
    sectionData.forEach(file => {
      allResourcesData.push(file)
    })
  })


  console.log(allResourcesData)
  // Sort posts by date
  return allResourcesData.sort((a, b) => {
    if(a.date > b.date) return 1;
    else return -1;
  })
}

export function getAllBlogIds() {
  const fileNames = fs.readdirSync(blogDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export function getResourceIds(section: string) {
  const fileNames = fs.readdirSync(`${resourcesDirectory}/${section}`)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export function getResourceSections() {
  const folderNames = fs.readdirSync(resourcesDirectory)
  return folderNames.map(folderName => {
    return {
      params: {
        section: folderName.replace('/\$/', '')
      }
    }
  })
}

export function getAllResourceIds() {
  const folderNames = fs.readdirSync(resourcesDirectory)
  return [].concat(folderNames.map(folderName => {
    return getResourceIds(folderName)
    
  }))
}

export async function getBlogData(id: string) {
  const fullPath = path.join(blogDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as {         
      date: string; 
      title: string; 
      authors: string;
      imgSrc: string; 
      blurb: string;
    })
  }
}

export async function getResourcesData(id: string, section: string) {
  const fullPath = path.join(`${resourcesDirectory}/${section}`, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as {         
      date: string; 
      title: string; 
      authors: string;
      imgSrc: string; 
      blurb: string;
    })
  }
}
