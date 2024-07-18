/**
 * Mục tiêu
    Tạo một form để tạo mới một task.
    Xử lý form submission.
    Thực hiện validation cơ bản.
    Gửi yêu cầu tạo mới task tới API.
    Yêu cầu
    Sử dụng React Hook Form để quản lý form.
    Sử dụng Yup để validation.
    Gửi yêu cầu tạo mới task bằng fetch.
 */

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

// Xác thực form bằng Yup
const schema = yup.object().shape({
  title: yup.string().required("Tiêu đề là bắt buộc"),
  description: yup.string().required("Mô tả là bắt buộc"),
});

interface ITask {
  title: string;
  description: string;
}

const NewTaskForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: ITask) => {
    console.log(data);
    alert("created new task");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Tiêu đề:</label>
        <input {...register("title")} />
        {errors.title && <p>{errors.title.message}</p>}
      </div>
      <div>
        <label>Mô tả:</label>
        <input {...register("description")} />
        {errors.description && <p>{errors.description.message}</p>}
      </div>
      <button type="submit">Tạo mới Task</button>
    </form>
  );
};

export default NewTaskForm;
