const tabs = document.querySelectorAll('.info-box li a')
const panels = document.querySelectorAll('.info-box article')

function tabHandler(tab, tabs, tabPosition, panels) {
  // Remove CSS classes from all tabs
  for (const t of tabs) {
    t.className = ''
  }
  // Set the clicked tab to active
  tab.className = 'active'

  // Remove CSS classes from all panels
  for (const panel of panels) {
    panel.className = ''
  }

  // Set the corresponding panel to active
  panels[tabPosition].className = 'active-panel'

  // Remove focus from the clicked tab
  tab.blur()
}

function setTabHandler(tabs, panels) {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].onclick = () => tabHandler(tabs[i], tabs, i, panels)
  }
}

setTabHandler(tabs, panels)