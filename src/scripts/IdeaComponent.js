import { createCustomElement } from "./utils";

const categoryClassMappings = {
  technology: "bg-cyan-300 text-black/90",
  healthcare: "bg-orange-300 text-black/90",
  energy: "bg-purple-300 text-black/90",
  fitness: "bg-green-300 text-black/90",
  marketing: "bg-blue-300 text-black/90",
};

export default function IdeaComponent({
  id,
  content,
  category,
  authorName,
  postDate,
}) {
  const delBtn = createCustomElement("button", {
    children: [
      createCustomElement("i", {
        class: "fa-solid fa-remove",
        "data-id": id,
        "data-purpose": "DELETE",
      }),
    ],
    class: "block ml-auto hover:text-red-600",
  });

  const contentEl = createCustomElement("p", {
    children: [content],
    class: "font-semibold text-sm mb-4",
  });

  const catEl = createCustomElement("p", {
    children: [category],
    class: `text-xs inline-block px-3 py-1 rounded-sm uppercase mb-3 ${
      categoryClassMappings[category.toLowerCase()] || "bg-slate-200"
    }`,
  });

  const footerEl = createCustomElement("p", {
    children: [],
    class: "idea-footer text-sm text-gray-600",
  });

  footerEl.innerHTML = `Posted on <span>${postDate}</span> by <span>${authorName}</span>`;

  const mainEl = createCustomElement("div", {
    children: [
      createCustomElement("div", { children: [delBtn, contentEl] }),
      createCustomElement("div", { children: [catEl, footerEl] }),
    ],
    class:
      "flex flex-col justify-between bg-white border border-gray-300 p-3 rounded shadow-sm min-h-[300px]",
  });
  return mainEl;
}
