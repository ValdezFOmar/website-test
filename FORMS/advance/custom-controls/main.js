window.addEventListener('load', _ => {
  const displaySelect = document.querySelector('div.no-widget')
  displaySelect.classList.remove('no-widget')
  displaySelect.classList.add('widget')

  const selectList = document.querySelectorAll('.select')

  selectList.forEach(select => {
    const optionList = select.querySelectorAll('.option')
    const selectedIndex = getIndex(select)

    select.tabIndex = 0
    select.previousElementSibling.tabIndex = -1
    updateValue(select, selectedIndex)

    optionList.forEach(option => {
      option.addEventListener('mouseover', _ => {
        highlightOption(select, option)
      })
    })

    optionList.forEach((option, index) => {
      option.addEventListener('click', _ => {
        updateValue(select, index)
      })
    })

    select.addEventListener('click', _ => {
      toggleOptList(select)
    })

    select.addEventListener('focus', _ => {
      activateSelect(select, selectList)
    })

    select.addEventListener('blur', _ => {
      deactivateSelect(select)
    })

    select.addEventListener('keyup', event => {
      if (event.key === 'Escape') {
        deactivateSelect(select)
      }

      let index = getIndex(select)

      if (event.key === 'ArrowDown' && index < optionList.length - 1) {
        index++
      }
      if (event.key === 'ArrowUp' && index > 0) {
        index--
      }

      updateValue(select, index)
    })
  })
})

function deactivateSelect(select) {
  if (!select.classList.contains('active'))
    return

  const optList = select.querySelector('.opt-list')
  optList.classList.add('hidden')
  select.classList.remove('active')
}

function activateSelect(select, selectList) {
  if (select.classList.contains('active'))
    return

  selectList.forEach(deactivateSelect)
  select.classList.add('active')
}

function toggleOptList(select) {
  const optList = select.querySelector('.opt-list')
  optList.classList.toggle('hidden')
}

function highlightOption(select, option) {
  const optionList = select.querySelectorAll('.option')

  optionList.forEach(other => other.classList.remove('highlight'))
  option.classList.add('highlight')
}

function updateValue(select, index) {
  const nativeWidget = select.previousElementSibling
  const value = select.querySelector('.value')
  const optionList = select.querySelectorAll('.option')

  optionList.forEach(other => {
    other.setAttribute('aria-selected', 'false')
  })
  optionList[index].setAttribute('aria-selected', 'true')

  nativeWidget.selectedIndex = index
  value.innerHTML = optionList[index].innerHTML
  highlightOption(select, optionList[index])
}

function getIndex(select) {
  const nativeWidget = select.previousElementSibling
  return nativeWidget.selectedIndex
}