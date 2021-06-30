import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import InputTextForm from '../InputTextForm';
import { Column, Row } from '../../StyledComponents/ContainerStyles';
import InputSelectColor from './InputSelectColor';
import { FormButton } from '../../StyledComponents/FormStyles';
import globalColors from '../../../styles/color_constants';
import { uiActions } from '../../../store/redux_ui/ui_slice';
import { createProject } from '../../../store/projects/project_actions';

const nameValidation = Yup.object().shape({
  name: Yup.string().required().min(1),
});

const CreateProyectForm = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ name: '', color: 'red' }}
      validationSchema={nameValidation}
      validateOnBlur
      validateOnChange
      onSubmit={(values) => {
        const { name, color, description } = values;
        dispatch(createProject({
          name,
          color,
          description,
        }));

        dispatch(uiActions.closeModal());
      }}
    >
      {() => (
        <Form style={{ width: '100%', padding: '1rem 2.8rem 1rem 1.5rem' }}>
          <Column central strech>
            <InputTextForm type="text" name="name" label="Name" />
            <InputTextForm name="description" label="Description" as="textarea" />
            <InputSelectColor name="color" label="Color" />
            <Row central style={{ justifyContent: 'flex-start' }}>
              <Field type="checkbox" name="favorite" id="favorite" style={{ cursor: 'pointer', width: '30px' }} />
              <span style={{ paddingLeft: '.5rem' }}>
                Add project to Favorites
              </span>
            </Row>
          </Column>
          <div
            style={{
              position: 'fixed',
              bottom: '0rem',
              left: '0rem',
              width: '100%',
            }}
          >
            <FormButton
              type="submit"
              background="lightgray"
              width={18}
              height={35}
              radius={8}
              onClick={() => dispatch(uiActions.closeModal())}
            >
              Cancel
            </FormButton>
            <FormButton
              type="submit"
              background={globalColors.loginColor}
              width={18}
              height={35}
              radius={8}
            >
              Add
            </FormButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreateProyectForm;
