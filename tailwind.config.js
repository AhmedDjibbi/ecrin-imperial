const cfg = {
    darkMode: "class",
    theme: {
      extend: {
        "colors": {
          "on-tertiary-fixed-variant": "#3c494e",
          "on-tertiary-fixed": "#111d22",
          "on-primary-fixed": "#251a00",
          "on-primary-fixed-variant": "#56441b",
          "surface-container-lowest": "#0d0e11",
          "surface-dim": "#121316",
          "tertiary": "#ddeaf1",
          "on-tertiary": "#263237",
          "outline": "#989082",
          "primary-container": "#e3c994",
          "on-surface-variant": "#cfc5b6",
          "primary-fixed-dim": "#ddc48f",
          "on-secondary-fixed": "#311300",
          "secondary": "#ffb688",
          "tertiary-fixed": "#d8e5eb",
          "on-secondary-fixed-variant": "#733500",
          "surface-container-low": "#1b1b1f",
          "inverse-on-surface": "#303034",
          "on-surface": "#e3e2e6",
          "on-error-container": "#ffdad6",
          "surface-container": "#1f1f23",
          "outline-variant": "#4c463b",
          "primary-fixed": "#fbdfa9",
          "tertiary-fixed-dim": "#bcc9cf",
          "secondary-container": "#853f00",
          "on-secondary-container": "#ffb688",
          "surface-container-high": "#292a2d",
          "on-tertiary-container": "#4c585d",
          "on-background": "#e3e2e6",
          "error": "#ffb4ab",
          "tertiary-container": "#c1ced4",
          "surface-bright": "#38393c",
          "background": "#121316",
          "primary": "#ffe5b2",
          "surface-variant": "#343538",
          "on-secondary": "#512400",
          "surface-container-highest": "#343538",
          "inverse-primary": "#6f5c31",
          "on-error": "#690005",
          "surface": "#121316",
          "secondary-fixed-dim": "#ffb688",
          "inverse-surface": "#e3e2e6",
          "on-primary-container": "#665429",
          "secondary-fixed": "#ffdbc7",
          "error-container": "#93000a",
          "on-primary": "#3e2e07",
          "surface-tint": "#ddc48f"
        },
        "borderRadius": {
          "DEFAULT": "0.125rem",
          "lg": "0.25rem",
          "xl": "0.5rem",
          "full": "0.75rem"
        },
        "spacing": {
          "space-md": "1rem",
          "space-lg": "1.75rem",
          "space-xl": "3rem",
          "space-xs": "0.25rem",
          "space-sm": "0.5rem",
          "margin": "2.5rem",
          "gutter": "1.5rem"
        },
        "fontFamily": {
          "headline-lg": [
            "Playfair Display"
          ],
          "title-lg": [
            "Plus Jakarta Sans"
          ],
          "headline-md": [
            "Playfair Display"
          ],
          "label-sm": [
            "Plus Jakarta Sans"
          ],
          "body-lg": [
            "Plus Jakarta Sans"
          ],
          "body-md": [
            "Plus Jakarta Sans"
          ],
          "display-lg-mobile": [
            "Playfair Display"
          ],
          "headline-sm": [
            "Playfair Display"
          ],
          "label-lg": [
            "Plus Jakarta Sans"
          ],
          "title-md": [
            "Plus Jakarta Sans"
          ],
          "headline-lg-mobile": [
            "Playfair Display"
          ],
          "display-lg": [
            "Playfair Display"
          ]
        },
        "fontSize": {
          "headline-lg": [
            "40px",
            {
              "lineHeight": "48px",
              "letterSpacing": "-0.01em",
              "fontWeight": "400"
            }
          ],
          "title-lg": [
            "18px",
            {
              "lineHeight": "26px",
              "letterSpacing": "0.01em",
              "fontWeight": "600"
            }
          ],
          "headline-md": [
            "28px",
            {
              "lineHeight": "36px",
              "fontWeight": "500"
            }
          ],
          "label-sm": [
            "11px",
            {
              "lineHeight": "14px",
              "letterSpacing": "0.15em",
              "fontWeight": "600"
            }
          ],
          "body-lg": [
            "16px",
            {
              "lineHeight": "26px",
              "fontWeight": "300"
            }
          ],
          "body-md": [
            "14px",
            {
              "lineHeight": "22px",
              "fontWeight": "300"
            }
          ],
          "display-lg-mobile": [
            "36px",
            {
              "lineHeight": "44px",
              "letterSpacing": "-0.01em",
              "fontWeight": "400"
            }
          ],
          "headline-sm": [
            "22px",
            {
              "lineHeight": "30px",
              "fontWeight": "600"
            }
          ],
          "label-lg": [
            "13px",
            {
              "lineHeight": "18px",
              "letterSpacing": "0.12em",
              "fontWeight": "600"
            }
          ],
          "title-md": [
            "16px",
            {
              "lineHeight": "24px",
              "fontWeight": "500"
            }
          ],
          "headline-lg-mobile": [
            "28px",
            {
              "lineHeight": "36px",
              "letterSpacing": "0em",
              "fontWeight": "400"
            }
          ],
          "display-lg": [
            "56px",
            {
              "lineHeight": "68px",
              "letterSpacing": "-0.02em",
              "fontWeight": "400"
            }
          ]
        }
      },
    },
  }
module.exports = {
  content: ["./*.html"],
  darkMode: cfg.darkMode || "class",
  theme: cfg.theme || {}
};
