### USO DE USEFORM

retorna 3 valores 

```
    const [ values, handleInputChange, resetForm ] = useForm(initialState);
```

values = son los valores del formulario por ejemplo:
    [], {}, '', 0

handleInputChange = Es la función que modifica el state de los inputs. 

resetForm = Regresa los valores a su initialState

#### EJEMPLO DE USO

```
    const [ values, handleInputChange, resetForm ] = useState({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = values;

    <form>
        <label>Nombre</label>
        <input 
            type="text"
            name="name"
            value={name}
            onChange={ handleInputChange }
        />

        <label>Email</label>
        <input 
            type="email"
            name="email"
            value={email}
            onChange={ handleInputChange }
        />

        <label>Password</label>
        <input 
            type="password"
            name="password"
            value={password}
            onChange={ handleInputChange }
        />
    </form>
```