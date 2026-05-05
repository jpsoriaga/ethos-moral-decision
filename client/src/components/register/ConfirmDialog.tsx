type ConfirmDialogProps = {
  openDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
  submitForm: () => void;
};

export default function ConfirmDialog({
  openDialog,
  setOpenDialog,
  submitForm,
}: ConfirmDialogProps) {
  if (!openDialog) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-xs z-50">
      <div className="bg-[#161616] p-5 rounded-xl w-[90%]">
        <h2 className="text-lg font-bold">Create your account</h2>
        <p className="text-sm text-white/70 mt-2">
          Submit your details to create your account.</p>

        <div className="flex justify-end gap-2 mt-7">
          <button
            onClick={() => setOpenDialog(false)}
            className="px-3 py-1"
          >
            Cancel
          </button>

          <button
            className="px-3 py-1 bg-[#00cc73] text-black rounded-md"
            onClick={() => {
              setOpenDialog(false);
              submitForm();
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}