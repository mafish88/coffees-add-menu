import './addCoffee.css'
export default function AddCoffee() {
    const handleSubmit = (event) => {
        event.preventDefault()
    // gather form data
    //event.target is the form
    //event.taget is the put "name"
    //event.target is the value of the input "name"
    const name = event.target.name.value
    const recipe = event.target.recipe.value
    const description = event.target.description.value
    // create a new coffee object
    const newCoffee = { name, recipe, description }
   // POST the newCoffee object to the API
   fetch('https://first-deployed-api-mf.web.app/coffees', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCoffee),


   })
   .then(res => res.json())
   .then(message => console.log(message))
   .catch(alert)

}
    
    
    
    return (
        <section className="coffee-form">
            <h2>Add a coffee</h2>
        <form onSubmite={handleSubmit}>
           <label htmlFor="name">
            Name:
            <input type="text" name='name' />
           </label>

           <label htmlFor="recipe">
            Recipe:
            <input type="text" name='recipe' />
           </label>
           
           <label htmlFor="description">
            Description:
            <input type="text" name='description' />
           </label>
        <input type="submit"value="add-btn" />
        
        </form>
        </section>

    )


}