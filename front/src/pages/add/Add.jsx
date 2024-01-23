import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';

import * as Yup from 'yup';
import "./add.scss"
import { Helmet } from 'react-helmet-async';
function Add() {
  const [search, setSearch] = useState("")

  const [data, setData] = useState([])
  const fetchData = async () => {
    const response = await fetch("http://localhost:3100/")
    const api = await response.json()
    setData(api)
  }
  useEffect(() => {
    fetchData()
  }, [])
  async function addDataFormik(item) {

    await fetch("http://localhost:3100/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    fetchData()

  }
  async function Delete(id) {
    await fetch("http://localhost:3100/" + id, {
      method: "DELETE",

    });
    fetchData()

  }
  const handleSearch = (e) => {
    setSearch(e.target.value)

  }
  return (
    <>
    <Helmet>
      <title>add</title>
    </Helmet>


      <Formik
        initialValues={{ name: '', image: '', price: '' }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required('Required'),
          image: Yup.string()
            .required('Required'),
          price: Yup.string().required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            addDataFormik(values)
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="name">First Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />

          <label htmlFor="image">image Name</label>
          <Field name="image" type="text" />
          <ErrorMessage name="image" />

          <label htmlFor="price">price Address</label>
          <Field name="price" type="text" />
          <ErrorMessage name="price" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <input type="text" value={search} onChange={(e) => handleSearch(e)} />
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>image</th>
            <th>price</th>
            <th>delete</th>

          </tr>
        </thead>
        <tbody>
          {data
            .filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
            .map((item) => {
              return (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.image}</td>
                  <td>{item.price}</td>
                  <button onClick={() => Delete(item._id)}>x</button>
                </tr>
              )
            })

          }

        </tbody>
      </table>
    </>
  )
}

export default Add