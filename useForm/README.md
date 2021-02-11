#Uso


### integrando con el Input

debe tener el atributo name="<nombre>" y value="<nombreEnElInput>"
para que onChange pueda recibir la infor a traves del handleInputChange
y el input value la reciba desestructurando el formValues


### input

name="<nombre>"
value={ <nombre> }
onChange={ handleInputChange }

### initialForm

debe ser un objeto con las propiedades

```
{ <nombreEnElInut> : '' }

```
este objeto se guardara en formValues y lo estamos inicializando vacio con ''.

###

### extrayendo valores
```
const [ formValues, handleInputChange, reset ] = useForm( initialForm );



```

