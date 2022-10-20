import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from "next-mdx-remote/serialize";

const resourcesDirectory = path.join(process.cwd(), 'posts/resources')
const blogDirectory = path.join(process.cwd(), 'posts/blog')

const getCompiledMDX = async (content) => {
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      format: "mdx",
    },
  });
  return mdxSource;
};
const blogComparator = (post1, post2) => { 
  const post1Data = post1.frontMatter
  const post2Data = post2.frontMatter

  if (post1Data.priority == post2Data.priority) {
    if(post1Data.date > post2Data.date) return -1
    else return 1
  } else {
    if(post1Data.priority > post2Data.priority) return -1 // if a has higher priority than b
    else return 1
  }
}
const dateComparator = (post1, post2) => {
  const post1Data = post1.frontMatter
  const post2Data = post2.frontMatter

  if(post1Data.date > post2Data.date) return -1
  else return 1
  
}
export function getAllSortedPostsData() {

  const sortedBlogs = getSortedBlogData()
  const sortedResources = getSortedAllResourcesData()

  // join the both postsData into one array 
  const allPostsData = sortedResources.concat(sortedBlogs)

  console.table(allPostsData)

  return allPostsData.sort((a, b) => dateComparator(a, b))
} 
export function getSortedBlogData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(blogDirectory)
  const allBlogData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.mdx$/, '')

    // Read markdown file as string
    const fullPath = path.join(blogDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const {data: frontMatter} = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      frontMatter,
      path: "blog",
    }
  })
  // Sort posts by date
  return allBlogData.sort((a, b) => blogComparator(a, b))
}
export async function getBlogData(id: string) {
  const fullPath = path.join(blogDirectory, `${id}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const { content, data: frontMatter } = matter(fileContents)
  const mdxSource = await getCompiledMDX(content)
  
  // Combine the data with the id and contentHtml
  return {
    frontMatter,
    mdxSource,
  }
}
export function getAllBlogIds() {
  const fileNames = fs.readdirSync(blogDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, '')
      }
    }
  })
}
// returns the sorted resource files of a specific section 
export function getSortedSectionData(section: string) {

  const resourcesSectionDirectory = `${resourcesDirectory}/${section}`

  const fileNames = fs.readdirSync(resourcesSectionDirectory)
  const resourcesData = fileNames.map(fileName => {
    const id = fileName.replace(/\.mdx$/, '')
    const fullPath = path.join(resourcesSectionDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const {data: frontMatter} = matter(fileContents)

    return {
      id,
      frontMatter,
      path: `resources/${section}`
    }
  })

  return resourcesData.sort((a, b) => dateComparator(a, b))

}
// returns all (sorted) resource files of ALL sections
export function getSortedAllResourcesData() {
  // Get file names under /posts
  const folderNames = fs.readdirSync(resourcesDirectory)
  // join all the data together
  let allResourcesData = []

  folderNames.forEach(folderName => {
    const sectionData = getSortedSectionData(folderName)
    sectionData.forEach(file => {
      allResourcesData.push(file)
    })
  })

  // Sort posts by date
  return allResourcesData.sort((a, b) => dateComparator(a, b))
}

export function getResourceIds(section: string) {
  const fileNames = fs.readdirSync(`${resourcesDirectory}/${section}`)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ''),
        section: section
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
  
  let allResourceIds = []

  folderNames.forEach(folderName => {
    getResourceIds(folderName).forEach(file => {
      allResourceIds.push(file)   
    })
  })

  return allResourceIds;
}

export async function getResourcesData(id: string, section: string) {
  const fullPath = path.join(`${resourcesDirectory}/${section}`, `${id}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const { content, data: frontMatter } = matter(fileContents)
  const mdxSource = await getCompiledMDX(content)

  // Combine the data with the id and contentHtml
  return {
    mdxSource,
    frontMatter
  }
}
