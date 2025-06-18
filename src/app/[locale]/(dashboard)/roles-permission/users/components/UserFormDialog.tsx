import DialogLayout, {
  DialogModalProps,
} from "@/components/common/dialog/DialogLayout";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { userSchemaResolver, UserSchemaType } from "../validation/userSchema";
import CommonFields from "./userFormDialogComponents/CommonFields";
import UploadImageBox from "./userFormDialogComponents/UploadImageBox";

type UserFormDialogProps = DialogModalProps & {
  editMode?: boolean;
  apply: () => void;
};

const UserFormDialog = ({
  isOpen,
  onClose,
  // apply,
  title,
  editMode = false,
}: // editMode = false,
UserFormDialogProps) => {
  const { t } = useTranslation("dialog");

  const form = useForm<UserSchemaType>({
    defaultValues: {
      user_image: "",
      role: "",
      user_name: "",
      user_email: "",
      user_department: "",
      phone_number: "",
      mobile_number: "",
      password: "",
      confirm_password: "",
      is_staff: false,
      method: "administrative",
      title: "",
      medical_license: "",
      is_pediatric_doctor: false,
      prevent_change_password: false,
      user_type: "",
    },
    resolver: userSchemaResolver,
    mode: "onTouched",
    shouldUnregister: true,
  });
  const { handleSubmit, control } = form;
  const watch = form.watch;
  const onSubmit = (data: UserSchemaType) => {
    console.log(data);
  };
const userImage = form.watch("user_image");
  return (
    <DialogLayout
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      width="max-w-[914px]"
    >
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              {/* <div className="size-24 md:size-[121px] flex flex-col items-center justify-center gap-2 border border-dashed border-gray-300 rounded-full">
                <FiUpload className="text-xl md:text-2xl text-main-blue" />
                <span className="text-[11px] md:text-sm text-main-blue">
                  {t("uploadImage")}
                </span>
              </div> */}
              <UploadImageBox
                onFileSelect={(file) => {
                  // Convert to base64 or upload it and set a URL
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    if (reader.result) {
                      form.setValue("user_image", reader.result as string);
                    }
                  };
                  reader.readAsDataURL(file);
                }}
                userImage={userImage}
              />
            </div>

            {editMode && (
              <div className="flex-1 flex flex-col items-start gap-y-3">
                <span className="text-sm text-dark-text leading-5">
                  {t("userId")}
                </span>

                <span className="text-lg sm:text-xl md:text-2xl text-dark-text leading-5 font-medium">
                  4098
                </span>
              </div>
            )}

            {editMode && (
              <div className="flex-1 flex flex-col items-start gap-y-2">
                <span className="text-sm text-dark-text leading-5">
                  {t("userId")}
                </span>

                <span className="text-lg sm:text-xl md:text-2xl text-dark-text leading-5 font-medium">
                  4098
                </span>
              </div>
            )}
          </div>
          {/* <p className="text-sm md:text-base text-gray-600 leading-[100%] text-wrap mt-8">
            {t("userDetails")}
          </p> */}
          <CommonFields
            control={control}
            editMode={editMode}
            watch={watch}
            t={t}
          />

          <Button
            variant="auth"
            className="w-auto mt-3 float-end"
            type="submit"
          >
            {t("createUser")}
          </Button>
        </form>
      </Form>
    </DialogLayout>
  );
};

export default UserFormDialog;
