import React from 'react';
import ReactFormController, {type UseControllerProps} from 'react-hook-form';
import ReactNative from 'react-native';

type ControlledTextInputProps<T extends ReactFormController.FieldValues> = Omit<
  ReactNative.TextInputProps,
  'value' | 'onChangeText' | 'onBlur'
> &
  UseControllerProps<T>;

const ControlledTextInput = <T extends ReactFormController.FieldValues>(
  props: ControlledTextInputProps<T>,
) => {
  const {
    control,
    name,
    rules,
    shouldUnregister,
    disabled,
    defaultValue,
    ...rest
  } = props;

  if (!name) {
    throw new Error('name prop is required');
  }

  return (
    <>
      <ReactFormController.Controller
        control={control}
        name={name}
        rules={rules}
        shouldUnregister={shouldUnregister}
        disabled={disabled}
        defaultValue={defaultValue}
        render={({field: {onChange, value}}) => (
          <ReactNative.TextInput
            onChangeText={text => onChange(text)}
            value={value}
            {...rest}
          />
        )}
      />
    </>
  );
};

export default ControlledTextInput;
