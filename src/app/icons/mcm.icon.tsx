import { rem } from "@mantine/core";

interface McmIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export default function McmIcon({ size, style, ...others }: McmIconProps) {
  return (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2000 2000"
      style={{ width: rem(size), height: rem(size), ...style }}
      {...others}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1={113.6}
          y1={948.83}
          x2={1809.25}
          y2={948.83}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#8dc63f" />
          <stop offset={0.5} stopColor="#00a651" />
          <stop offset={1} stopColor="#00aeef" />
        </linearGradient>
        <style>
          {
            ".cls-5{fill:#0e3050}.cls-7{fill:#0b7f59}.cls-5,.cls-7{stroke-width:0}.cls-10{letter-spacing:.7em}"
          }
        </style>
      </defs>
      <path
        style={{
          fill: "none",
          stroke: "url(#linear-gradient)",
          strokeMiterlimit: 10,
          strokeWidth: 60,
        }}
        d="M140.12 1569.73 640.5 622.74l433.98 436.74 713.4-724.52"
      />
      <path
        style={{
          fill: "#27aae1",
          strokeWidth: 0,
        }}
        d="m1871.34 256.7-68.25 232.11-81.68-85.74-85.2-89.43 235.13-56.94z"
      />
      <path
        className="cls-7"
        d="M1735.28 523.52v1046.21h-91.21v-955l91.21-91.21zM1188.08 1064.93v504.8h-91.2v-413.6l91.2-91.2zM1446.7 814.38v588.73h-91.21V905.59l91.21-91.21zM1313.91 945.46v371.87h-91.2v-280.66l91.2-91.21zM1592.94 665.56v598.33h-91.2V756.76l91.2-91.2z"
      />
      <text
        transform="translate(442.42 1465.51)"
        style={{
          fontSize: "619.29px",
          fontFamily: "GoogleSans-Bold,'Google Sans'",
          fontWeight: 700,
          fill: "#0e3050",
        }}
      >
        <tspan x={0} y={0}>
          {"C"}
        </tspan>
      </text>
      <path
        className="cls-5"
        d="M626.28 919.41h39.09v650.32h-39.09zM707.05 919.41h39.09v650.32h-39.09z"
      />
      <text
        transform="translate(138.24 1701.11)"
        style={{
          fontFamily: "GoogleSans-Bold,'Google Sans'",
          fontWeight: 700,
          fill: "#0e3050",
          fontSize: 72,
        }}
      >
        <tspan
          x={0}
          y={0}
          style={{
            letterSpacing: ".7em",
          }}
        >
          {"MY"}
        </tspan>
        <tspan
          x={211.82}
          y={0}
          style={{
            letterSpacing: ".68em",
          }}
        />
        <tspan
          x={277.63}
          y={0}
          style={{
            letterSpacing: ".68em",
          }}
        >
          {"C"}
        </tspan>
        <tspan className="cls-10" x={380.66} y={0}>
          {"O"}
        </tspan>
        <tspan
          x={491.54}
          y={0}
          style={{
            letterSpacing: ".69em",
          }}
        >
          {"S"}
        </tspan>
        <tspan className="cls-10" x={583.63} y={0}>
          {"T MAN"}
        </tspan>
        <tspan
          x={1065.09}
          y={0}
          style={{
            letterSpacing: ".68em",
          }}
        >
          {"A"}
        </tspan>
        <tspan className="cls-10" x={1166.04} y={0}>
          {"GEMENT"}
        </tspan>
      </text>
    </svg>
  );
}
