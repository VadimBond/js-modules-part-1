function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
  // tabs
  const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);

  function hideTabContent() {
    tabsContent.forEach(content => {
      content.style.display = "none";
    });
    
    tabs.forEach(tab => {
      tab.classList.remove(activeClass);
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].style.display = "block";
    tabs[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", (e) => {
    const target = e.target;

    if (target && target.classList.contains(tabsSelector.slice(1))) {
      if (target.classList.contains(activeClass)) {
        return;
      } else {
        hideTabContent();
        tabs.forEach((tab, i) => {
          if (tab == target) {
            showTabContent(i);
          }
        });
      }
    }
  });
}

export default tabs;
