import devfools from "@/";
import "@unocss/reset/normalize.css";
import "virtual:uno.css";

devfools("all");

const stacks = [
  {
    label: "Nuxt",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M13.464 19.83h8.922c.283 0 .562-.073.807-.21a1.59 1.59 0 0 0 .591-.574a1.53 1.53 0 0 0 .216-.783a1.529 1.529 0 0 0-.217-.782L17.792 7.414a1.59 1.59 0 0 0-.591-.573a1.652 1.652 0 0 0-.807-.21c-.283 0-.562.073-.807.21a1.59 1.59 0 0 0-.59.573L13.463 9.99L10.47 4.953a1.591 1.591 0 0 0-.591-.573a1.653 1.653 0 0 0-.807-.21c-.284 0-.562.073-.807.21a1.591 1.591 0 0 0-.591.573L.216 17.481a1.53 1.53 0 0 0-.217.782c0 .275.074.545.216.783a1.59 1.59 0 0 0 .59.574c.246.137.525.21.808.21h5.6c2.22 0 3.856-.946 4.982-2.79l2.733-4.593l1.464-2.457l4.395 7.382h-5.859Zm-6.341-2.46l-3.908-.002l5.858-9.842l2.923 4.921l-1.957 3.29c-.748 1.196-1.597 1.632-2.916 1.632z"/></svg>`,
  },
  {
    label: "Vue",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M24 1.61h-9.94L12 5.16L9.94 1.61H0l12 20.78ZM12 14.08L5.16 2.23h4.43L12 6.41l2.41-4.18h4.43Z"/></svg>`,
  },
  {
    label: "Svelte",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M10.354 21.125a4.44 4.44 0 0 1-4.765-1.767a4.109 4.109 0 0 1-.703-3.107a3.898 3.898 0 0 1 .134-.522l.105-.321l.287.21a7.21 7.21 0 0 0 2.186 1.092l.208.063l-.02.208a1.253 1.253 0 0 0 .226.83a1.337 1.337 0 0 0 1.435.533a1.231 1.231 0 0 0 .343-.15l5.59-3.562a1.164 1.164 0 0 0 .524-.778a1.242 1.242 0 0 0-.211-.937a1.338 1.338 0 0 0-1.435-.533a1.23 1.23 0 0 0-.343.15l-2.133 1.36a4.078 4.078 0 0 1-1.135.499a4.44 4.44 0 0 1-4.765-1.766a4.108 4.108 0 0 1-.702-3.108a3.855 3.855 0 0 1 1.742-2.582l5.589-3.563a4.072 4.072 0 0 1 1.135-.499a4.44 4.44 0 0 1 4.765 1.767a4.109 4.109 0 0 1 .703 3.107a3.943 3.943 0 0 1-.134.522l-.105.321l-.286-.21a7.204 7.204 0 0 0-2.187-1.093l-.208-.063l.02-.207a1.255 1.255 0 0 0-.226-.831a1.337 1.337 0 0 0-1.435-.532a1.231 1.231 0 0 0-.343.15L8.62 9.368a1.162 1.162 0 0 0-.524.778a1.24 1.24 0 0 0 .211.937a1.338 1.338 0 0 0 1.435.533a1.235 1.235 0 0 0 .344-.151l2.132-1.36a4.067 4.067 0 0 1 1.135-.498a4.44 4.44 0 0 1 4.765 1.766a4.108 4.108 0 0 1 .702 3.108a3.857 3.857 0 0 1-1.742 2.583l-5.589 3.562a4.072 4.072 0 0 1-1.135.499m10.358-17.95C18.484-.015 14.082-.96 10.9 1.068L5.31 4.63a6.412 6.412 0 0 0-2.896 4.295a6.753 6.753 0 0 0 .666 4.336a6.43 6.43 0 0 0-.96 2.396a6.833 6.833 0 0 0 1.168 5.167c2.229 3.19 6.63 4.135 9.812 2.108l5.59-3.562a6.41 6.41 0 0 0 2.896-4.295a6.756 6.756 0 0 0-.665-4.336a6.429 6.429 0 0 0 .958-2.396a6.831 6.831 0 0 0-1.167-5.168Z"/></svg>`,
  },
  {
    label: "React",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236a2.236 2.236 0 0 1-2.236-2.236a2.236 2.236 0 0 1 2.235-2.236a2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622c-1.78-1.653-3.542-2.602-4.887-2.602c-.41 0-.783.093-1.106.278c-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03c-.704 3.113-.39 5.588.988 6.38c.32.187.69.275 1.102.275c1.345 0 3.107-.96 4.888-2.624c1.78 1.654 3.542 2.603 4.887 2.603c.41 0 .783-.09 1.106-.275c1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032c.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127c.666.382.955 1.835.73 3.704c-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28c-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538a15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707c.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564c-.44-.02-.89-.034-1.345-.034c-.46 0-.915.01-1.36.034c.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093c.406.582.802 1.203 1.183 1.86c.372.64.71 1.29 1.018 1.946c-.308.655-.646 1.31-1.013 1.95c-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005a26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16c-.225.39-.435.782-.635 1.174c-.265-.656-.49-1.31-.676-1.947c.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387c-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498c1.732.74 2.852 1.708 2.852 2.476c-.005.768-1.125 1.74-2.857 2.475c-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5c-1.732-.737-2.852-1.706-2.852-2.474c0-.768 1.12-1.742 2.852-2.476c.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948c-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175c.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423c.23 1.868-.054 3.32-.714 3.708c-.147.09-.338.128-.563.128c-1.012 0-2.514-.807-4.11-2.28c.686-.72 1.37-1.536 2.02-2.44c1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532c.66.905 1.345 1.727 2.035 2.446c-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703c.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034c.46 0 .915-.01 1.36-.034c-.44.572-.895 1.095-1.345 1.565c-.455-.47-.91-.993-1.36-1.565z"/></svg>`,
  },
  {
    label: "Redux",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M16.634 16.504c.87-.075 1.543-.84 1.5-1.754c-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 0 0-1.648 1.769c.03.479.226.869.494 1.153c-1.048 2.038-2.621 3.536-5.005 4.795c-1.603.838-3.296 1.154-4.944.93c-1.378-.195-2.456-.81-3.116-1.799c-.988-1.499-1.078-3.116-.255-4.734c.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 0 1-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456c.6 0 1.23-.044 1.843-.194c3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753c.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 0 0 1.499-1.049h.555c2.309 0 4.495.674 6.488 1.992c1.527 1.005 2.622 2.323 3.237 3.897c.538 1.288.509 2.547-.045 3.597c-.855 1.647-2.294 2.517-4.196 2.517c-1.199 0-2.367-.375-2.967-.644c-.36.298-.96.793-1.394 1.093c1.318.598 2.652.943 3.94.943c2.922 0 5.094-1.647 5.919-3.236c.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 0 0 1.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029c-1.243-2.098-1.768-4.347-1.572-6.772c.12-1.828.72-3.417 1.797-4.735c.9-1.124 2.593-1.68 3.747-1.708c3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62C9.02.62 6.49 2.613 5.47 5.535C4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z"/></svg>`,
  },
  {
    label: "Angular",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9.96 12.648h4.08L12 7.74l-2.04 4.908zM12 0L.828 3.984l1.704 14.772L12 24l9.468-5.244l1.704-14.772L12 0zm6.972 18.312h-2.604l-1.404-3.504H9.036l-1.404 3.504H5.028L12 2.652l6.972 15.66z"/></svg>`,
  },
];

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="fixed inset-0 grid place-items-center">
    <main>
      <ul class="list-none flex sm:space-x-8 space-y-4 sm:space-y-auto sm:flex-row flex-col justify-center items-center">
        ${stacks
          .map(
            (stack) => `
        <li class="">
          <div >
            ${stack.svg}
          </div>
        </li>`
          )
          .join("")}
      </ul>
      <code class="block text-center mt-12">
            npm install devfools
      </code>
    </main>
    <footer class="fixed bottom-8 inset-x-0 grid place-items-center">
      <a href="https://github.com/withyellow/devfools">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="" d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
      </a>
    </footer>
  </div>
`;
