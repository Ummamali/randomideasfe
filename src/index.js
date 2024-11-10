import IdeaComponent from "./scripts/IdeaComponent";
import "./styles/style.css";
import "./styles/twoutput.css";

function init() {
  const addBtn = document.getElementById("add");
  const ideaContainer = document.getElementById("idea-contain");

  ideaContainer.appendChild(
    IdeaComponent({
      id: "101e",
      content: "Some content",
      category: "Technology",
      authorName: "Tony Stark",
      postDate: new Date().toISOString(),
    })
  );
  ideaContainer.appendChild(
    IdeaComponent({
      id: "101e",
      content: "Some content",
      category: "Technology",
      authorName: "Tony Stark",
      postDate: new Date().toISOString(),
    })
  );
  ideaContainer.appendChild(
    IdeaComponent({
      id: "101e",
      content: "Some content",
      category: "Technology",
      authorName: "Tony Stark",
      postDate: new Date().toISOString(),
    })
  );
  ideaContainer.appendChild(
    IdeaComponent({
      id: "101e",
      content: "Some content",
      category: "Technology",
      authorName: "Tony Stark",
      postDate: new Date().toISOString(),
    })
  );
}

init();
