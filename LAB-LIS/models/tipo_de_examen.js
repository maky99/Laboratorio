const data = {
    tipos_de_examen: [
      {
        nombre: "Examen de Sangre",
        valores_de_referencia: [
          {
            nombre: "Hemoglobina",
            unidad: "g/dL",
            rango_normal: {
              hombre: {
                mínimo: 13.8,
                máximo: 17.2
              },
              mujer: {
                mínimo: 12.1,
                máximo: 15.1
              },
              niño: {
                mínimo: 10.0,
                máximo: 14.0
              }
            }
          },
          {
            nombre: "Glucosa en Ayunas",
            unidad: "mg/dL",
            rango_normal: {
              mínimo: 70,
              máximo: 100
            }
          }
        ]
      },
      {
        nombre: "Examen de Orina",
        valores_de_referencia: [
          {
            nombre: "Proteína en Orina",
            unidad: "mg/dL",
            rango_normal: {
              mínimo: 0,
              máximo: 15
            }
          },
          {
            nombre: "Glóbulos Blancos en Orina",
            unidad: "por campo",
            rango_normal: {
              mínimo: 0,
              máximo: 5
            }
          }
        ]
      }
    ],
    consideraciones_especiales: {
      embarazo: {
        examen_recomendado: "Prueba de Orina para Detección de Embarazo",
        valores_de_referencia: {
          positivo: "Embarazada",
          negativo: "No Embarazada"
        }
      },
      enfermedades: {
        examen_recomendado: "Perfil de Pruebas Sanguíneas Específicas",
        valores_de_referencia: {
          positivo: "Se detectan anomalías",
          negativo: "No se detectan anomalías"
        }
      }
    },
    valores_específicos_para_niños: {
      Hemoglobina: {
        unidad: "g/dL",
        rango_normal: {
          mínimo: 10.0,
          máximo: 14.0
        }
      },
      "Glucosa en Ayunas": {
        unidad: "mg/dL",
        rango_normal: {
          mínimo: 60,
          máximo: 100
        }
      },
      "Proteína en Orina": {
        unidad: "mg/dL",
        rango_normal: {
          mínimo: 0,
          máximo: 10
        }
      },
      "Glóbulos Blancos en Orina": {
        unidad: "por campo",
        rango_normal: {
          mínimo: 0,
          máximo: 10
        }
      }
    }
  };
  
  // Puedes acceder a los datos de esta estructura de objeto de la siguiente manera:
  console.log(data.tipos_de_examen[0].nombre); // "Examen de Sangre"
  console.log(data.tipos_de_examen[0].valores_de_referencia[0].nombre); // "Hemoglobina"
  console.log(data.consideraciones_especiales.enfermedades.examen_recomendado); // "Perfil de Pruebas Sanguíneas Específicas"
  