import Swal from "sweetalert2";

export const sweetAlertConfirm = async () => {
    const alerta = Swal.fire({
      title: "Estas seguro?",
      text: "Esto no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: 'No borrar',
      confirmButtonText: "Si, borrar!",
    });

    const response = await alerta;

    return response.isConfirmed;
}