export function collapse_filter(elementIndex) {
  const button = document.querySelectorAll('.footer_collapsible')[elementIndex];
  const content = button.nextElementSibling;

  console.log(content);

  const isContentVisible = content.style.display === "block";

  content.style.display = isContentVisible ? "none" : "block";
  button.firstElementChild.innerHTML = isContentVisible ? "+" : "-";
}

export default collapse_filter;