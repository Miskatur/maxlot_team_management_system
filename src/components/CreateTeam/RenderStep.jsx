export const renderStep = (steps, register, errors, watch) => {
    switch (steps) {
        case 1:
            return (
                <div>
                    <div className="form-control w-full">
                        <label>Team Name</label>
                        <input
                            type="text"
                            {...register("name", {
                                required: "Team name is required", pattern: {
                                    value: /^[^\s]+(?:$|.*[^\s]+$)/,
                                    message: "Entered value cant start/end or contain only white spacing"
                                },
                            })}

                            placeholder='Agile-3'
                            className="px-3 py-2 border-secondary border outline-none rounded-lg w-full text-black" />

                        {errors.name && <p className='text-red-500 text-xs'>{errors.name?.message}</p>}
                    </div>
                </div>
            );
        case 2:
            return (
                <div className="form-control w-full">
                    <label htmlFor='category'> Team Category </label>
                    <input
                        id='category'
                        type="text"
                        {...register("category", {
                            required: "Team Title is required", pattern: {
                                value: /^[^\s]+(?:$|.*[^\s]+$)/,
                                message: "Entered value cant start/end or contain only white spacing"
                            },
                        })}
                        value={watch("category") || ""}
                        placeholder='Video editing'
                        className="px-3 py-2 border-secondary border outline-none rounded-lg w-full text-black" />

                    {errors.category && <p className='text-red-500 text-xs'>{errors.category?.message}</p>}
                </div>
            );
        case 3:
            return (
                <div className="form-control w-full">
                    <label htmlFor='description'>Team Goal</label>
                    <input id='description'
                        type="text"
                        {...register("description",
                            {
                                required: "Team goal is required", pattern: {
                                    value: /^[^\s]+(?:$|.*[^\s]+$)/,
                                    message: "Entered value cant start/end or contain only white spacing"
                                },
                            })}

                        value={watch("description") || ""}
                        placeholder='Deadline for MosKot is 5 day'
                        className="px-3 py-2 border-secondary border outline-none rounded-lg w-full text-black" />

                    {errors.description && <p className='text-red-500 text-xs'>{errors.description?.message}</p>}
                </div>
            );

        default:
            return null;
    }
};

