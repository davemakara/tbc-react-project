import { useRouter } from "next/navigation";
import { createUserAction } from "../../app/actions";

interface CreateUserFormProps {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
}

const CreateUserForm: React.FC<CreateUserFormProps> = ({
  openModal,
  setOpenModal,
}) => {
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      await createUserAction(formData);
      setOpenModal(false);
    } catch (error) {
      console.error("Error occurred while handling form submission:", error);
    }
    router.refresh();
  };

  return (
    <>
      {openModal && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 backdrop-blur">
          <form
            onSubmit={handleSubmit}
            className="md:w-[500px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center bg-cardsDarkBG shadow-lg rounded-md z-50 py-10 px-4"
          >
            <input
              className="w-full md:w-4/5 h-full border-2 border-light_blue p-3 text-secondary lg:text-[16px] rounded-[5px] my-2"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <input
              className="w-full md:w-4/5 h-full border-2 border-light_blue p-3 text-secondary lg:text-[16px] rounded-[5px] my-2"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              className="w-full md:w-4/5 border-2 border-light_blue p-3 text-secondary lg:text-[16px] rounded-[5px] my-2"
              type="text"
              name="age"
              placeholder="Age"
              required
            />
            <div className="w-full md:w-4/5 flex justify-around mt-8">
              <button
                onClick={() => setOpenModal(false)}
                className="border-0 bg-red py-1 md:py-2 px-3 md:px-5 text-white text-[14px] lg:text-[20px] rounded-[5px] transition-all transform duration-300 ease-linear"
              >
                Cancel
              </button>
              <button
                className="border-0 bg-darkYellow rounded-[5px] py-1 md:py-2 px-3 md:px-5 text-[14px] lg:text-[20px] cursor-pointer transition-all transform duration-300 ease-linear"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default CreateUserForm;
