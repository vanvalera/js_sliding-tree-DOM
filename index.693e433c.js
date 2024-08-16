var e=document.querySelectorAll("li"),n=document.querySelector(".tree");e.forEach(function(e){if(e.children.length>0){var n=document.createElement("span");e.prepend(n),n.append(n.nextSibling)}}),n.addEventListener("click",function(e){"SPAN"===e.target.tagName&&(e.target.nextSibling.hidden=!e.target.nextSibling.hidden)});
//# sourceMappingURL=index.693e433c.js.map
