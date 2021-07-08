const app = Vue.createApp({
    data() {
        return {
            titulo: 'Mi banco con Vue.js',
            cantidad: 1000,
            enlace: 'https://youtube.com/bluuweb',
            estado: true,
            servicios: ['Transferencias', 'Pagos', 'Giros', 'Cheques'],
            desactivar: false,
        }
    },
    methods: {
        agregarSaldo() {
            this.cantidad = this.cantidad + 100
        },
        disminuirSaldo(valor) {
            if(this.cantidad === 0) {
                this.desactivar = true;
                alert('Saldo en 0');
                return
            }
            this.cantidad = this.cantidad - valor;
        }
    },
    computed: {
        colorCantidad() {
            return this.cantidad > 500 ? 'text-success' : 'text-danger'
        },
        mayusculasTexto() {
            return this.titulo.toUpperCase();
        },
    }
})