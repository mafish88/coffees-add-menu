import './addCoffee.css'
export default function AddCoffee() {
    return (
        <section className="coffee-form">
            <h2>Add a coffee</h2>
        <form>
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
        </form>
        </section>

    )


}