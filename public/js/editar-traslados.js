let oAlert;
$(document).ready(() => {
    $('#editar').click(() => {

        oAlert = alertify.confirm().setContent(`
                   <form>  
                       <label>Lugar</label>
                       <input type="text" name="alert-pickup" class="form-control" value="${document.querySelector('#pickup-span').innerText}">
    
                       <label>Destino</label>
                       <input type="text" name="alert-destino" class="form-control" value="${document.querySelector('#destino-span').innerText}">
    
                       <label >Fecha</label>
                       <input type="date" name="alert-date" class="form-control" value="${document.querySelector('#date-span').innerText.replaceAll('/', '-')}">
    
                       <label>Hora</label>
                       <input type="time" name="alert-time" class="form-control" value="${document.querySelector('#time-span').innerText}">
    
                       <label>Numero de personas</label>
                       <input type="number" name="alert-pipol" class="form-control" value="${document.querySelector('#pipol-span').innerText}">
    
    
                   </form>
               `).setHeader('<em> <i edit class="fas fa-edit" style ="color: #ED5F98; font-size: 90px; margin-left: 200px; margin-top: 14px;"></i></em>  <em class = "close d-d-flex justify-content-end"> <i class="fas fa-times" style ="color: #bcbcbc; font-size: 20px margin-margin-top: 29px"></i>    </em> ')
            .set('onok', (closeEvent) => {
                alertify.success('Saved');
                document.querySelector('#pickup-span').innerText = document.querySelector(
                    'input[name="alert-pickup"]').value;
                document.querySelector('#destino-span').innerText = document.querySelector(
                    'input[name="alert-destino"]').value;
                document.querySelector('#date-span').innerText = document.querySelector(
                    'input[name="alert-date"]').value.split('-').reverse().join('-');
                document.querySelector('#time-span').innerText = document.querySelector(
                    'input[name="alert-time"]').value;
                document.querySelector('#pipol-span').innerText = document.querySelector(
                    'input[name="alert-pipol"]').value;

            }).set('closable', false)
            .set('oncancel', (closeEvent) => {
                alertify.error('Cancel');
            }).set('movable', false);
        oAlert.set({
            onshow: (() => {
                document.querySelector('.fas.fa-times').addEventListener('click', () => oAlert.close());
            })
        }).set('labels', {
            ok: 'Continuar',
            cancel: 'Cancelar'
        });

        oAlert.show();
        oAlert.elements['root'].classList.add('custom-alert');

    })
})