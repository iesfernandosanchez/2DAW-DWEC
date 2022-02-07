class Screen {
    constructor() {

    }

    renderProfiles(usuarios) {

        var panelUsuarios = 0;
        for (let index = 0; index < usuarios.length; index ++) {
            const element = usuarios[index];
            var templateUsuario = document.querySelector('#profile-user');
            var cloneTemplateUsuario = document.importNode(templateUsuario.textContent, true);
            var nombre = cloneTemplateUsuario.querySelector('#nombre');
            nombre.innerHTML = element;

            panelUsuarios.appendChild(cloneTemplateUsuario);

        }
    }
}