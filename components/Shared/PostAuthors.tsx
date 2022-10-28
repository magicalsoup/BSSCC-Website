import { POST_AUTHORS } from "../../data/PostAuthorsData";

export default function PostAuthors({ authors }) {
  const individualAuthors = authors.split(", ");
  const authorData = [];

  for (let i = 0; i < individualAuthors.length; i++) {
    for (let j = 0; j < POST_AUTHORS.length; j++) {
      if (individualAuthors[i] === POST_AUTHORS[j].name) {
        authorData.push(POST_AUTHORS[j]);
        break;
      }
    }
  }

  const getPhotoRingStyle = (role: string) => {
    let outline = ``;
    if (role === "Executive") {
      outline = `ring-green-400`;
    } else if (role === "Previous Executive") {
      outline = `ring-yellow-400`;
    } else if (role === "President") {
      outline = `ring-violet-400`;
    }
    return outline;
  };

  return (
    <div className="flex flex-col w-fit text-sm py-4">
      {authorData.map((author, index) => (
        <div className="flex w-full py-1.5" key={index}>
          <div className="pr-4">
            <div className={`rounded-full ring ring-offset-2 ring-2 ${getPhotoRingStyle(author.role)}`}>
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={author.photo}
              />
            </div>
          </div>
          <div className="flex flex-col items-start font-dmsans font-medium">
            <h1 className="">{author.name}</h1>
            <p className="text-gray-500">{author.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
