import { useForm } from "react-hook-form";
import { useToast } from "../../hooks/useToast";

const ContactForm = () => {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const { toast, showToast } = useToast();

  const onSubmit = (data) => {
    showToast("Pesan berhasil dikirim!");
    reset();
  };

  return (
    <div className="position-relative">
      {toast.show && (
        <div
          className="position-absolute top-0 start-50 translate-middle alert alert-success text-center shadow"
          style={{ zIndex: 999 }}
        >
          {toast.message}
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 bg-white rounded-4 shadow-sm border"
      >
        <div className="mb-3">
          <label className="form-label fw-semibold">Nama</label>
          <input
            type="text"
            className="form-control"
            {...register("name", { required: true })}
          />
          {errors.name && <small className="text-danger">Wajib diisi</small>}
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Email</label>
          <input
            type="email"
            className="form-control"
            {...register("email", { required: true })}
          />
          {errors.email && <small className="text-danger">Wajib diisi</small>}
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Pesan</label>
          <textarea
            className="form-control"
            rows="4"
            {...register("message", { required: true })}
          ></textarea>
          {errors.message && <small className="text-danger">Wajib diisi</small>}
        </div>

        <button className="btn btn-toska w-100">Kirim Pesan</button>
      </form>
    </div>
  );
};
export default ContactForm;
