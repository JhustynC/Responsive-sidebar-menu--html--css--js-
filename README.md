# Making a responsive sidebar menu (HTMl, CSS, JS)

## Elements of composition

- nav: We can choose between nav and aside tag to make the menu but in this case, the best option is nav, since this element is specific for navigation.

- main: This tag is to place the main content depending on the button

### Breaking down the code for nav

- We have (got) two main elements to make the sidebar menu.
  - menu-button
  ```html
  <li class="active">
    <a href="index.html">
      <svg .../></svg>
      <span>Home</span>
    </a>
  </li>
  ```
  - menu-dropdown-button
  ```html
  <li>
    <button class="dropdown-btn">
      <svg .../></svg>
      <span>Create</span>
    </button>
    <ul class="sub-menu">
      <li><a href="#">Folder</a></li>
      <li><a href="#">Document</a></li>
      <li><a href="#">Project</a></li>
      <li><a href="#">User</a></li>
    </ul>
  </li>
  ```
- The base form of the menu

  ```html
    <nav id="sidebar">
      <ul>
        <!-- menu-button -->
        <li class="active">
          <a href="index.html">
            <svg .../></svg>
            <span>Home</span>
          </a>
        </li>
        <!-- menu-dropdown-button -->
        <li>
          <button class="dropdown-btn">
            <svg .../></svg>
            <span>Create</span>
          </button>
          <ul class="sub-menu">
            <li><a href="#">Folder</a></li>
            <li><a href="#">Document</a></li>
            <li><a href="#">Project</a></li>
            <li><a href="#">User</a></li>
          </ul>
        </li>
        ...
      </ul>
    </nav>
    <!-- main content -->
    <main>
      ...
    </main>
  ```


