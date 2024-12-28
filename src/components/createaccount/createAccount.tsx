import React from 'react';
import ReactFormHook from 'react-hook-form';
import ReactNative from 'react-native';
import ControlledTextInput from '../controlledinput/controlledInput';
import ErrorMessage from '../error/errorMessage';
import {validateEmail, validatePassword} from '@utils/index';
import {useUserContext} from '@context/user/userContext';

type CreateAccountForm = {
  email: string;
  password: string;
};

const CreateAccount = (): JSX.Element => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = ReactFormHook.useForm<CreateAccountForm>({
    mode: 'onSubmit',
    // defaultValues: {email: 'parasannagowda@gmail.com'}
  });

  const {createUser} = useUserContext();

  const handleCreateUser = React.useCallback(
    (email: string, pwd: string) => {
      createUser({emailId: email, pwd: pwd});
    },
    [createUser],
  );

  return (
    <ReactNative.View>
      <ReactNative.View>
        <ControlledTextInput
          control={control}
          name="email"
          placeholder="Email Address"
          className="border placeholder:text-[1.1rem] caret-black mb-4 rounded-lg"
          keyboardType="email-address"
          rules={{
            required: 'Email field is required',
            validate: validateEmail,
          }}
        />
        <ErrorMessage
          message={errors.email?.message}
          className="text-red-600"
        />
      </ReactNative.View>
      <ReactNative.View>
        <ControlledTextInput
          control={control}
          name="password"
          placeholder="Password"
          className="border placeholder:text-[1.1rem] caret-black mb-4 rounded-lg"
          keyboardType="default"
          // secureTextEntry
          rules={{
            required: 'Password is required',
            validate: validatePassword,
          }}
        />
        <ErrorMessage
          message={errors.password?.message}
          className="text-red-600"
        />
      </ReactNative.View>
      <ReactNative.Button
        title="SignIn"
        color="black"
        onPress={handleSubmit(data => {
          // console.log('data.email', data);
          handleCreateUser(data.email, data.password);
        })}
      />
    </ReactNative.View>
  );
};

export default CreateAccount;
