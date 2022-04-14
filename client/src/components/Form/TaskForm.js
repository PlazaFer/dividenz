import React from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createTaskStart, updateTaskStart } from '../../redux/actions';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Typography } from "@mui/material";
import { useStyles, ContainerForm, PaperForm, ButtonBack, ButtonForm, Inputs } from "./styles/taskFormStyles";

export const TaskForm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.tasks)

  const classes = useStyles();


  return (
    <>
      <ButtonBack
        variant="contained"
        color="error"
        size="small"
        onClick={() => navigate("/")}
      >
        Volver
      </ButtonBack>
      <Formik
        initialValues={{
          title: state?.title || "",
          content: state?.content || "",
        }}
        validationSchema={Yup.object({
          title: Yup.string().required("El campo es requerido"),
          content: Yup.string().required("El campo es requerido"),
        })}
        onSubmit={(values, { resetForm }) => {
          if(state){
            const { id } = state;
            dispatch(updateTaskStart({id, values}))
            toast.success('Tarea actualizada correctamente')
            setTimeout(() => {
              navigate('/')
            }, 700)
          }else{
            dispatch(createTaskStart(values));
            toast.success("Tarea creada correctamente");
            resetForm();
          }
        }}
      >
        {({ getFieldProps, errors, touched }) => (
          <ContainerForm>
            <PaperForm elevation={4}>
              <Typography variant="h6" sx={{textAlign: 'center'}}>
                {state ? "Editar tarea" : "Crear tarea"}
              </Typography>
              <Form className={classes.form}>
                <Field
                  as={Inputs}
                  type="text"
                  label="Titulo"
                  error={touched.title && Boolean(errors.title)}
                  helperText={<ErrorMessage name="title" />}
                  {...getFieldProps("title")}
                  fullWidth
                />
                <Field
                  as={Inputs}
                  type="text"
                  label="Contenido"
                  error={touched.content && Boolean(errors.content)}
                  helperText={<ErrorMessage name="content" />}
                  multiline
                  {...getFieldProps("content")}
                  fullWidth
                />
                <ButtonForm
                  variant="contained"
                  color="error"
                  type="submit"
                  fullWidth
                  disabled={loading}
                >
                  {state ? "Editar" : "Crear"}
                </ButtonForm>
              </Form>
            </PaperForm>
          </ContainerForm>
        )}
      </Formik>
    </>
  );
};
