### COMPONENTES DE FORMULARIO

Para utilizar estos componentes requiere instalar emotion/styled 

```
    npm install @emotion/core @emotion/styled
```

### DESCRIPCIÓN

Cuando en un proyecto se requieren varios formularios, es molesto estar creando uno por uno y dando estilos, así que estos componentes pretenden ahorrar este trabajo, con estilos que pueden ser modificados por el usuario. Al final solo tiene que importarlos y utilizarlos

### USO
Aquí puede hacer uso del customHook **useForm** para el manejo de los eventos en los inputs. 
```
    import { Form, Fields, Submit } from 'ruta de este archivo'

    <Form>
        <Fields>
            <label>Nombre</label>
            <input 
                type="text"
            />
        </Fields>

        <Fields>
            <label>Email</label>
            <input 
                type="email"
            />
        </Fields>

        <Fields>
            <label>Email</label>
            <input 
                type="password"
            />
        </Fields>
    </Form>
```

Y tendra los estilos para todos sus formularios.
