import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    fullName: '',
    email: '',
    subject: '',
    message: '',
  },
  isSubmitting: false,
  errors: {},
  status: null, // 'success', 'error', or null
  message: '',
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
      // Clear error for the field being updated
      const field = Object.keys(action.payload)[0];
      if (state.errors[field]) {
        delete state.errors[field];
      }
    },
    setSubmitting: (state, action) => {
      state.isSubmitting = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload.status;
      state.message = action.payload.message;
    },
    resetForm: (state) => {
      state.formData = initialState.formData;
      state.isSubmitting = false;
      state.errors = {};
      state.status = null;
      state.message = '';
    },
  },
});

export const { updateFormData, setSubmitting, setErrors, setStatus, resetForm } = contactSlice.actions;
export default contactSlice.reducer;
