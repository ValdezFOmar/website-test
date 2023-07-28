class PopupInfo extends HTMLElement {
  constructor() {
    super()

    // Create a shadow root
    this.attachShadow({mode: 'open'})

    // Create nested span elements
    const wrapper = document.createElement('span')
    wrapper.setAttribute('class', 'wrapper')

    const icon = wrapper.appendChild(document.createElement('span'))
    icon.setAttribute('class', 'icon')
    icon.setAttribute('tabindex', '0')

    // Insert icon from defined attribute or default icon
    const img = icon.appendChild(document.createElement('img'))
    img.src = this.hasAttribute('img')
        ? this.getAttribute('img')
        : 'img/default.png'
    img.alt = this.hasAttribute('alt')
        ? this.getAttribute('alt')
        : ''

    const info = wrapper.appendChild(document.createElement('span'))
    info.setAttribute('class', 'info')
    // Take attribute content and put it inside the info span
    info.textContent = this.getAttribute('data-text')

    // Create some CSS to apply to the shadow DOM
    const style = document.createElement('style')
    style.textContent = `
      .wrapper {
        position: relative;
      }

      .info {
        font-size: 0.8rem;
        width: 200px;
        display: inline-block;
        border: 1px solid black;
        padding: 10px;
        background: white;
        border-radius: 10px;
        opacity: 0;
        transition: 0.6s all;
        position: absolute;
        bottom: 20px;
        left: 10px;
        z-index: 3;
      }

      img {
        width: 1.2rem;
      }

      .icon:hover + .info, .icon:focus + .info {
        opacity: 1;
      }
    `

    // Attach the created elements to the shadow DOM
    this.shadowRoot.append(style, wrapper)


  }
}

// Register the custom element
customElements.define('popup-info', PopupInfo)