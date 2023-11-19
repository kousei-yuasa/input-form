import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Slider from "rc-slider";
const RangeSlider = ({
  control,
  color,
  name,
}: {
  control: any;
  color: string;
  name: string;
}) => {
  const object = {
    label: <strong></strong>,
    style: {
      width: "11px",
    },
  };
  const sliderProps = {
    min: 1,
    max: 5,
    step: 1,
    stepStyle: {
      height: "6px",
    },
    dotStyle: {
      borderColor: "gray",
      height: "11px",
      width: "11px",
      bottom: "-3.5px",
    },
    activeDotStyle: { borderColor: color },
    railStyle: { backgroundColor: "gray" },
    trackStyle: [{ backgroundColor: color }],
    handleStyle: [
      {
        backgroundColor: "#fff",
        border: `2px solid ${color} `,
        opacity: 1,
        height: "28px",
        width: "28px",
        marginTop: "-12px",
      },
    ],
    marks: {
      1: object,
      2: object,
      3: object,
      4: object,
      5: object,
    },
  };

  return (
    <>
      <div className="mx-5 mb-[38px]">
        <div className="mx-auto w-[98%]">
          <Controller
            control={control}
            name={name}
            defaultValue={3}
            render={({ field: { value, onChange } }) => (
              <>
                <div
                  className="mx-[1px] mb-[6px] flex justify-between font-loto text-lg"
                  style={{ color: `${color}` }}
                >
                  <p style={value === 1 ? { opacity: 1 } : { opacity: 0 }}>
                    {value}
                  </p>
                  <p style={value === 2 ? { opacity: 1 } : { opacity: 0 }}>
                    {value}
                  </p>
                  <p style={value === 3 ? { opacity: 1 } : { opacity: 0 }}>
                    {value}
                  </p>
                  <p style={value === 4 ? { opacity: 1 } : { opacity: 0 }}>
                    {value}
                  </p>
                  <p style={value === 5 ? { opacity: 1 } : { opacity: 0 }}>
                    {value}
                  </p>
                </div>
                <div className="mx-auto w-[96%]">
                  <Slider
                    value={value}
                    onChange={onChange}
                    {...sliderProps}
                    style={{ color: color }}
                  />
                </div>
              </>
            )}
          />
        </div>
      </div>
    </>
  );
};
export default RangeSlider;
