import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { Input, FormControl, FormLabel, FormErrorMessage, FormHelperText, Box, Button } from '@chakra-ui/react';

export default function LoginForm(): ReactElement {
  const { handleSubmit, errors, register, formState } = useForm();

  function validateOtp(value) {
    if (!value) {
      return 'Please Enter OTP';
    }
    return true;
  }

  function onSubmit(data): void {
    console.log(data);
  }

  return (
    <Box my="auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.otp} id="otp">
          <FormLabel htmlFor="otp">Enter OTP</FormLabel>
          <Input type="number" name="otp" ref={register({ validate: validateOtp })} />
          <FormErrorMessage>{errors.otp && errors.otp.message}</FormErrorMessage>
          <FormHelperText>This is a helper text</FormHelperText>
        </FormControl>
        <Button mt={4} colorScheme="teal" isLoading={formState.isSubmitting} type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
}
