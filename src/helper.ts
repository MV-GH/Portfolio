/**
 * This file contains helper functions for my components
 */

import * as marked from "marked";
import hljs from "highlight.js";

export function convertMDtoHtml(md: string) {
    return marked.marked(md, {
        langPrefix: 'hljs language-',
        highlight: function (md: string) {
            return hljs.highlightAuto(md).value
        }
    })
}

export function addCopyButton(id: number) {
    document.querySelectorAll(`#project-${id} pre`).forEach((codeBlock) => {
        const container = document.createElement("div")
        container.className = "container"

        const btn = document.createElement('button');
        btn.className = 'copy';
        btn.ariaLabel = 'Copy code to clipboard';
        btn.innerHTML = '<i class="far fa-clipboard"></i>';
        container.append(btn)
        codeBlock.append(container);

        btn.addEventListener('click', function () {
            const code = codeBlock.querySelector('code')?.innerText.trim();
            if (code === undefined) return;
            window.navigator.clipboard.writeText(code).then(() => {
                btn.innerHTML = '<i class="fas fa-check"></i>';
                btn.classList.add("active")
                setTimeout(function () {
                    btn.innerHTML = '<i class="far fa-clipboard"></i>';
                    btn.classList.remove("active")
                }, 2500);
            })
        });
    });
}