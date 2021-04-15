import useOfferForm from "./CustomHooks";

import * as Joi from "joi";

const schema = Joi.object({
  name: Joi.string().required(),
  company: Joi.string().required(),
  salary: Joi.string().required(),
  city: Joi.string().required(),
});

function SaveJob() {
  const { handleSubmit, handleInputChange, errors } = useOfferForm(schema);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="salary">Salary</label>
          <input
            type="text"
            id="salary"
            name="salary"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <p> {errors.toString()} </p>
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default SaveJob;