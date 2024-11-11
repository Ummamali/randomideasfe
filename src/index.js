import IdeaComponent from "./scripts/IdeaComponent";
import { Resource } from "./scripts/Resource";
import "./styles/style.css";
import "./styles/twoutput.css";

function init() {
  const addBtn = document.getElementById("add");
  const ideaContainer = document.getElementById("idea-contain");

  const ideaResource = new Resource("http://127.0.0.1:5000/api/ideas");
  const usersResource = new Resource("http://127.0.0.1:5000/api/users");

  async function hydrate() {
    await ideaResource.requestAll();
    await usersResource.requestAll();

    ideaResource.items.forEach((item) => {
      const authorObj = usersResource.items.find(
        (x) => x._id === item.authorId
      );
      const cmpEl = IdeaComponent({
        id: item._id,
        content: item.content,
        category: item.category,
        authorName: authorObj.fullname,
        postDate: item.date.slice(0, 11),
      });
      ideaContainer.appendChild(cmpEl);
    });
  }

  ideaContainer.addEventListener("click", (e) => {
    const target = e.target;
    if (target.dataset.purpose === "DELETE") {
      const id = target.dataset.id;
      ideaResource.requestDelete(id).then(({ deleted }) => {
        if (deleted) {
          target.parentElement.parentElement.parentElement.remove();
        }
      });
    }
  });

  hydrate();
}

init();
