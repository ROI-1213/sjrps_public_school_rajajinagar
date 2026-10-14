import __vite__cjsImport0_tailwindcssAnimate from "/node_modules/.vite/deps/tailwindcss-animate.js?v=1d0f02d4"; const tailwindcssAnimate = __vite__cjsImport0_tailwindcssAnimate.__esModule ? __vite__cjsImport0_tailwindcssAnimate.default : __vite__cjsImport0_tailwindcssAnimate;
export default {
    darkMode: [
        "class"
    ],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}"
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            fontFamily: {
                'sans': [
                    'Inter',
                    'system-ui',
                    'sans-serif'
                ],
                'serif': [
                    'Playfair Display',
                    'Georgia',
                    'serif'
                ]
            },
            keyframes: {
                'accordion-down': {
                    from: {
                        height: '0'
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)'
                    }
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)'
                    },
                    to: {
                        height: '0'
                    }
                },
                'fade-in': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(20px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'slide-left': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(-50px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)'
                    }
                },
                'slide-right': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(50px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)'
                    }
                },
                'scale-in': {
                    '0%': {
                        opacity: '0',
                        transform: 'scale(0.8)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'scale(1)'
                    }
                },
                'float': {
                    '0%, 100%': {
                        transform: 'translateY(0px)'
                    },
                    '50%': {
                        transform: 'translateY(-10px)'
                    }
                },
                'marquee': {
                    '0%': {
                        transform: 'translateX(0)'
                    },
                    '100%': {
                        transform: 'translateX(-100%)'
                    }
                },
                'ticker-up': {
                    '0%': {
                        transform: 'translateY(0)'
                    },
                    '100%': {
                        transform: 'translateY(-50%)'
                    }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.8s ease-out forwards',
                'slide-left': 'slide-left 0.8s ease-out forwards',
                'slide-right': 'slide-right 0.8s ease-out forwards',
                'scale-in': 'scale-in 0.6s ease-out forwards',
                'float': 'float 3s ease-in-out infinite',
                'marquee': 'marquee 35s linear infinite',
                'ticker-up': 'ticker-up 25s linear infinite'
            },
            colors: {
                'indian-green': 'hsl(var(--indian-green))',
                'saffron-orange': 'hsl(var(--saffron-orange))',
                'golden-yellow': 'hsl(var(--golden-yellow))',
                'logo-navy': 'hsl(var(--logo-navy))',
                'logo-maroon': 'hsl(var(--logo-maroon))',
                'school-brown': 'hsl(var(--school-brown))',
                'school-light-brown': 'hsl(var(--school-light-brown))',
                'school-gold': 'hsl(var(--school-gold))',
                'tricolor-orange': 'hsl(var(--tricolor-orange))',
                'tricolor-green': 'hsl(var(--tricolor-green))',
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                sidebar: {
                    DEFAULT: 'hsl(var(--sidebar-background))',
                    foreground: 'hsl(var(--sidebar-foreground))',
                    primary: 'hsl(var(--sidebar-primary))',
                    'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
                    accent: 'hsl(var(--sidebar-accent))',
                    'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
                    border: 'hsl(var(--sidebar-border))',
                    ring: 'hsl(var(--sidebar-ring))'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            }
        }
    },
    plugins: [
        tailwindcssAnimate
    ]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhaWx3aW5kLmNvbmZpZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IENvbmZpZyB9IGZyb20gXCJ0YWlsd2luZGNzc1wiO1xuaW1wb3J0IHRhaWx3aW5kY3NzQW5pbWF0ZSBmcm9tIFwidGFpbHdpbmRjc3MtYW5pbWF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGRhcmtNb2RlOiBbXCJjbGFzc1wiXSxcblx0Y29udGVudDogW1xuXHRcdFwiLi9wYWdlcy8qKi8qLnt0cyx0c3h9XCIsXG5cdFx0XCIuL2NvbXBvbmVudHMvKiovKi57dHMsdHN4fVwiLFxuXHRcdFwiLi9hcHAvKiovKi57dHMsdHN4fVwiLFxuXHRcdFwiLi9zcmMvKiovKi57dHMsdHN4fVwiLFxuXHRdLFxuXHRwcmVmaXg6IFwiXCIsXG5cdHRoZW1lOiB7XG5cdFx0Y29udGFpbmVyOiB7XG5cdFx0XHRjZW50ZXI6IHRydWUsXG5cdFx0XHRwYWRkaW5nOiAnMnJlbScsXG5cdFx0XHRzY3JlZW5zOiB7XG5cdFx0XHRcdCcyeGwnOiAnMTQwMHB4J1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZXh0ZW5kOiB7XG5cdFx0XHRmb250RmFtaWx5OiB7XG5cdFx0XHRcdCdzYW5zJzogWydJbnRlcicsICdzeXN0ZW0tdWknLCAnc2Fucy1zZXJpZiddLFxuXHRcdFx0XHQnc2VyaWYnOiBbJ1BsYXlmYWlyIERpc3BsYXknLCAnR2VvcmdpYScsICdzZXJpZiddLFxuXHRcdFx0fSxcblx0XHRcdGtleWZyYW1lczoge1xuXHRcdFx0XHQnYWNjb3JkaW9uLWRvd24nOiB7XG5cdFx0XHRcdFx0ZnJvbToge1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAnMCdcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHRvOiB7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6ICd2YXIoLS1yYWRpeC1hY2NvcmRpb24tY29udGVudC1oZWlnaHQpJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0J2FjY29yZGlvbi11cCc6IHtcblx0XHRcdFx0XHRmcm9tOiB7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6ICd2YXIoLS1yYWRpeC1hY2NvcmRpb24tY29udGVudC1oZWlnaHQpJ1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dG86IHtcblx0XHRcdFx0XHRcdGhlaWdodDogJzAnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQnZmFkZS1pbic6IHtcblx0XHRcdFx0XHQnMCUnOiB7XG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAnMCcsXG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDIwcHgpJ1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0JzEwMCUnOiB7XG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAnMScsXG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0J3NsaWRlLWxlZnQnOiB7XG5cdFx0XHRcdFx0JzAlJzoge1xuXHRcdFx0XHRcdFx0b3BhY2l0eTogJzAnLFxuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTBweCknXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQnMTAwJSc6IHtcblx0XHRcdFx0XHRcdG9wYWNpdHk6ICcxJyxcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQnc2xpZGUtcmlnaHQnOiB7XG5cdFx0XHRcdFx0JzAlJzoge1xuXHRcdFx0XHRcdFx0b3BhY2l0eTogJzAnLFxuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiAndHJhbnNsYXRlWCg1MHB4KSdcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCcxMDAlJzoge1xuXHRcdFx0XHRcdFx0b3BhY2l0eTogJzEnLFxuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKSdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdzY2FsZS1pbic6IHtcblx0XHRcdFx0XHQnMCUnOiB7XG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAnMCcsXG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJ1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0JzEwMCUnOiB7XG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAnMScsXG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06ICdzY2FsZSgxKSdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdmbG9hdCc6IHtcblx0XHRcdFx0XHQnMCUsIDEwMCUnOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDBweCknXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQnNTAlJzoge1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMTBweCknXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQnbWFycXVlZSc6IHtcblx0XHRcdFx0XHQnMCUnOiB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknIH0sXG5cdFx0XHRcdFx0JzEwMCUnOiB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwMCUpJyB9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdCd0aWNrZXItdXAnOiB7XG5cdFx0XHRcdFx0JzAlJzogeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyB9LFxuXHRcdFx0XHRcdCcxMDAlJzogeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyB9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRhbmltYXRpb246IHtcblx0XHRcdFx0J2FjY29yZGlvbi1kb3duJzogJ2FjY29yZGlvbi1kb3duIDAuMnMgZWFzZS1vdXQnLFxuXHRcdFx0XHQnYWNjb3JkaW9uLXVwJzogJ2FjY29yZGlvbi11cCAwLjJzIGVhc2Utb3V0Jyxcblx0XHRcdFx0J2ZhZGUtaW4nOiAnZmFkZS1pbiAwLjhzIGVhc2Utb3V0IGZvcndhcmRzJyxcblx0XHRcdFx0J3NsaWRlLWxlZnQnOiAnc2xpZGUtbGVmdCAwLjhzIGVhc2Utb3V0IGZvcndhcmRzJyxcblx0XHRcdFx0J3NsaWRlLXJpZ2h0JzogJ3NsaWRlLXJpZ2h0IDAuOHMgZWFzZS1vdXQgZm9yd2FyZHMnLFxuXHRcdFx0XHQnc2NhbGUtaW4nOiAnc2NhbGUtaW4gMC42cyBlYXNlLW91dCBmb3J3YXJkcycsXG5cdFx0XHRcdCdmbG9hdCc6ICdmbG9hdCAzcyBlYXNlLWluLW91dCBpbmZpbml0ZScsXG5cdFx0XHRcdCdtYXJxdWVlJzogJ21hcnF1ZWUgMzVzIGxpbmVhciBpbmZpbml0ZScsXG5cdFx0XHRcdCd0aWNrZXItdXAnOiAndGlja2VyLXVwIDI1cyBsaW5lYXIgaW5maW5pdGUnXG5cdFx0XHR9LFxuXHRcdFx0Y29sb3JzOiB7XG5cdFx0XHRcdCdpbmRpYW4tZ3JlZW4nOiAnaHNsKHZhcigtLWluZGlhbi1ncmVlbikpJyxcblx0XHRcdFx0J3NhZmZyb24tb3JhbmdlJzogJ2hzbCh2YXIoLS1zYWZmcm9uLW9yYW5nZSkpJyxcblx0XHRcdFx0J2dvbGRlbi15ZWxsb3cnOiAnaHNsKHZhcigtLWdvbGRlbi15ZWxsb3cpKScsXG5cdFx0XHRcdCdsb2dvLW5hdnknOiAnaHNsKHZhcigtLWxvZ28tbmF2eSkpJyxcblx0XHRcdFx0J2xvZ28tbWFyb29uJzogJ2hzbCh2YXIoLS1sb2dvLW1hcm9vbikpJyxcblx0XHRcdFx0J3NjaG9vbC1icm93bic6ICdoc2wodmFyKC0tc2Nob29sLWJyb3duKSknLFxuXHRcdFx0XHQnc2Nob29sLWxpZ2h0LWJyb3duJzogJ2hzbCh2YXIoLS1zY2hvb2wtbGlnaHQtYnJvd24pKScsXG5cdFx0XHRcdCdzY2hvb2wtZ29sZCc6ICdoc2wodmFyKC0tc2Nob29sLWdvbGQpKScsXG5cdFx0XHRcdCd0cmljb2xvci1vcmFuZ2UnOiAnaHNsKHZhcigtLXRyaWNvbG9yLW9yYW5nZSkpJyxcblx0XHRcdFx0J3RyaWNvbG9yLWdyZWVuJzogJ2hzbCh2YXIoLS10cmljb2xvci1ncmVlbikpJyxcblx0XHRcdFx0Ym9yZGVyOiAnaHNsKHZhcigtLWJvcmRlcikpJyxcblx0XHRcdFx0aW5wdXQ6ICdoc2wodmFyKC0taW5wdXQpKScsXG5cdFx0XHRcdHJpbmc6ICdoc2wodmFyKC0tcmluZykpJyxcblx0XHRcdFx0YmFja2dyb3VuZDogJ2hzbCh2YXIoLS1iYWNrZ3JvdW5kKSknLFxuXHRcdFx0XHRmb3JlZ3JvdW5kOiAnaHNsKHZhcigtLWZvcmVncm91bmQpKScsXG5cdFx0XHRcdHByaW1hcnk6IHtcblx0XHRcdFx0XHRERUZBVUxUOiAnaHNsKHZhcigtLXByaW1hcnkpKScsXG5cdFx0XHRcdFx0Zm9yZWdyb3VuZDogJ2hzbCh2YXIoLS1wcmltYXJ5LWZvcmVncm91bmQpKSdcblx0XHRcdFx0fSxcblx0XHRcdFx0c2Vjb25kYXJ5OiB7XG5cdFx0XHRcdFx0REVGQVVMVDogJ2hzbCh2YXIoLS1zZWNvbmRhcnkpKScsXG5cdFx0XHRcdFx0Zm9yZWdyb3VuZDogJ2hzbCh2YXIoLS1zZWNvbmRhcnktZm9yZWdyb3VuZCkpJ1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRkZXN0cnVjdGl2ZToge1xuXHRcdFx0XHRcdERFRkFVTFQ6ICdoc2wodmFyKC0tZGVzdHJ1Y3RpdmUpKScsXG5cdFx0XHRcdFx0Zm9yZWdyb3VuZDogJ2hzbCh2YXIoLS1kZXN0cnVjdGl2ZS1mb3JlZ3JvdW5kKSknXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG11dGVkOiB7XG5cdFx0XHRcdFx0REVGQVVMVDogJ2hzbCh2YXIoLS1tdXRlZCkpJyxcblx0XHRcdFx0XHRmb3JlZ3JvdW5kOiAnaHNsKHZhcigtLW11dGVkLWZvcmVncm91bmQpKSdcblx0XHRcdFx0fSxcblx0XHRcdFx0YWNjZW50OiB7XG5cdFx0XHRcdFx0REVGQVVMVDogJ2hzbCh2YXIoLS1hY2NlbnQpKScsXG5cdFx0XHRcdFx0Zm9yZWdyb3VuZDogJ2hzbCh2YXIoLS1hY2NlbnQtZm9yZWdyb3VuZCkpJ1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRwb3BvdmVyOiB7XG5cdFx0XHRcdFx0REVGQVVMVDogJ2hzbCh2YXIoLS1wb3BvdmVyKSknLFxuXHRcdFx0XHRcdGZvcmVncm91bmQ6ICdoc2wodmFyKC0tcG9wb3Zlci1mb3JlZ3JvdW5kKSknXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGNhcmQ6IHtcblx0XHRcdFx0XHRERUZBVUxUOiAnaHNsKHZhcigtLWNhcmQpKScsXG5cdFx0XHRcdFx0Zm9yZWdyb3VuZDogJ2hzbCh2YXIoLS1jYXJkLWZvcmVncm91bmQpKSdcblx0XHRcdFx0fSxcblx0XHRcdFx0c2lkZWJhcjoge1xuXHRcdFx0XHRcdERFRkFVTFQ6ICdoc2wodmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKSknLFxuXHRcdFx0XHRcdGZvcmVncm91bmQ6ICdoc2wodmFyKC0tc2lkZWJhci1mb3JlZ3JvdW5kKSknLFxuXHRcdFx0XHRcdHByaW1hcnk6ICdoc2wodmFyKC0tc2lkZWJhci1wcmltYXJ5KSknLFxuXHRcdFx0XHRcdCdwcmltYXJ5LWZvcmVncm91bmQnOiAnaHNsKHZhcigtLXNpZGViYXItcHJpbWFyeS1mb3JlZ3JvdW5kKSknLFxuXHRcdFx0XHRcdGFjY2VudDogJ2hzbCh2YXIoLS1zaWRlYmFyLWFjY2VudCkpJyxcblx0XHRcdFx0XHQnYWNjZW50LWZvcmVncm91bmQnOiAnaHNsKHZhcigtLXNpZGViYXItYWNjZW50LWZvcmVncm91bmQpKScsXG5cdFx0XHRcdFx0Ym9yZGVyOiAnaHNsKHZhcigtLXNpZGViYXItYm9yZGVyKSknLFxuXHRcdFx0XHRcdHJpbmc6ICdoc2wodmFyKC0tc2lkZWJhci1yaW5nKSknXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRib3JkZXJSYWRpdXM6IHtcblx0XHRcdFx0bGc6ICd2YXIoLS1yYWRpdXMpJyxcblx0XHRcdFx0bWQ6ICdjYWxjKHZhcigtLXJhZGl1cykgLSAycHgpJyxcblx0XHRcdFx0c206ICdjYWxjKHZhcigtLXJhZGl1cykgLSA0cHgpJ1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0cGx1Z2luczogW3RhaWx3aW5kY3NzQW5pbWF0ZV0sXG59IHNhdGlzZmllcyBDb25maWc7XG4iXSwibmFtZXMiOlsidGFpbHdpbmRjc3NBbmltYXRlIiwiZGFya01vZGUiLCJjb250ZW50IiwicHJlZml4IiwidGhlbWUiLCJjb250YWluZXIiLCJjZW50ZXIiLCJwYWRkaW5nIiwic2NyZWVucyIsImV4dGVuZCIsImZvbnRGYW1pbHkiLCJrZXlmcmFtZXMiLCJmcm9tIiwiaGVpZ2h0IiwidG8iLCJvcGFjaXR5IiwidHJhbnNmb3JtIiwiYW5pbWF0aW9uIiwiY29sb3JzIiwiYm9yZGVyIiwiaW5wdXQiLCJyaW5nIiwiYmFja2dyb3VuZCIsImZvcmVncm91bmQiLCJwcmltYXJ5IiwiREVGQVVMVCIsInNlY29uZGFyeSIsImRlc3RydWN0aXZlIiwibXV0ZWQiLCJhY2NlbnQiLCJwb3BvdmVyIiwiY2FyZCIsInNpZGViYXIiLCJib3JkZXJSYWRpdXMiLCJsZyIsIm1kIiwic20iLCJwbHVnaW5zIl0sIm1hcHBpbmdzIjoiQUFDQSxPQUFPQSx3QkFBd0Isc0JBQXNCO0FBRXJELGVBQWU7SUFDZEMsVUFBVTtRQUFDO0tBQVE7SUFDbkJDLFNBQVM7UUFDUjtRQUNBO1FBQ0E7UUFDQTtLQUNBO0lBQ0RDLFFBQVE7SUFDUkMsT0FBTztRQUNOQyxXQUFXO1lBQ1ZDLFFBQVE7WUFDUkMsU0FBUztZQUNUQyxTQUFTO2dCQUNSLE9BQU87WUFDUjtRQUNEO1FBQ0FDLFFBQVE7WUFDUEMsWUFBWTtnQkFDWCxRQUFRO29CQUFDO29CQUFTO29CQUFhO2lCQUFhO2dCQUM1QyxTQUFTO29CQUFDO29CQUFvQjtvQkFBVztpQkFBUTtZQUNsRDtZQUNBQyxXQUFXO2dCQUNWLGtCQUFrQjtvQkFDakJDLE1BQU07d0JBQ0xDLFFBQVE7b0JBQ1Q7b0JBQ0FDLElBQUk7d0JBQ0hELFFBQVE7b0JBQ1Q7Z0JBQ0Q7Z0JBQ0EsZ0JBQWdCO29CQUNmRCxNQUFNO3dCQUNMQyxRQUFRO29CQUNUO29CQUNBQyxJQUFJO3dCQUNIRCxRQUFRO29CQUNUO2dCQUNEO2dCQUNBLFdBQVc7b0JBQ1YsTUFBTTt3QkFDTEUsU0FBUzt3QkFDVEMsV0FBVztvQkFDWjtvQkFDQSxRQUFRO3dCQUNQRCxTQUFTO3dCQUNUQyxXQUFXO29CQUNaO2dCQUNEO2dCQUNBLGNBQWM7b0JBQ2IsTUFBTTt3QkFDTEQsU0FBUzt3QkFDVEMsV0FBVztvQkFDWjtvQkFDQSxRQUFRO3dCQUNQRCxTQUFTO3dCQUNUQyxXQUFXO29CQUNaO2dCQUNEO2dCQUNBLGVBQWU7b0JBQ2QsTUFBTTt3QkFDTEQsU0FBUzt3QkFDVEMsV0FBVztvQkFDWjtvQkFDQSxRQUFRO3dCQUNQRCxTQUFTO3dCQUNUQyxXQUFXO29CQUNaO2dCQUNEO2dCQUNBLFlBQVk7b0JBQ1gsTUFBTTt3QkFDTEQsU0FBUzt3QkFDVEMsV0FBVztvQkFDWjtvQkFDQSxRQUFRO3dCQUNQRCxTQUFTO3dCQUNUQyxXQUFXO29CQUNaO2dCQUNEO2dCQUNBLFNBQVM7b0JBQ1IsWUFBWTt3QkFDWEEsV0FBVztvQkFDWjtvQkFDQSxPQUFPO3dCQUNOQSxXQUFXO29CQUNaO2dCQUNEO2dCQUNBLFdBQVc7b0JBQ1YsTUFBTTt3QkFBRUEsV0FBVztvQkFBZ0I7b0JBQ25DLFFBQVE7d0JBQUVBLFdBQVc7b0JBQW9CO2dCQUMxQztnQkFDQSxhQUFhO29CQUNaLE1BQU07d0JBQUVBLFdBQVc7b0JBQWdCO29CQUNuQyxRQUFRO3dCQUFFQSxXQUFXO29CQUFtQjtnQkFDekM7WUFDRDtZQUNBQyxXQUFXO2dCQUNWLGtCQUFrQjtnQkFDbEIsZ0JBQWdCO2dCQUNoQixXQUFXO2dCQUNYLGNBQWM7Z0JBQ2QsZUFBZTtnQkFDZixZQUFZO2dCQUNaLFNBQVM7Z0JBQ1QsV0FBVztnQkFDWCxhQUFhO1lBQ2Q7WUFDQUMsUUFBUTtnQkFDUCxnQkFBZ0I7Z0JBQ2hCLGtCQUFrQjtnQkFDbEIsaUJBQWlCO2dCQUNqQixhQUFhO2dCQUNiLGVBQWU7Z0JBQ2YsZ0JBQWdCO2dCQUNoQixzQkFBc0I7Z0JBQ3RCLGVBQWU7Z0JBQ2YsbUJBQW1CO2dCQUNuQixrQkFBa0I7Z0JBQ2xCQyxRQUFRO2dCQUNSQyxPQUFPO2dCQUNQQyxNQUFNO2dCQUNOQyxZQUFZO2dCQUNaQyxZQUFZO2dCQUNaQyxTQUFTO29CQUNSQyxTQUFTO29CQUNURixZQUFZO2dCQUNiO2dCQUNBRyxXQUFXO29CQUNWRCxTQUFTO29CQUNURixZQUFZO2dCQUNiO2dCQUNBSSxhQUFhO29CQUNaRixTQUFTO29CQUNURixZQUFZO2dCQUNiO2dCQUNBSyxPQUFPO29CQUNOSCxTQUFTO29CQUNURixZQUFZO2dCQUNiO2dCQUNBTSxRQUFRO29CQUNQSixTQUFTO29CQUNURixZQUFZO2dCQUNiO2dCQUNBTyxTQUFTO29CQUNSTCxTQUFTO29CQUNURixZQUFZO2dCQUNiO2dCQUNBUSxNQUFNO29CQUNMTixTQUFTO29CQUNURixZQUFZO2dCQUNiO2dCQUNBUyxTQUFTO29CQUNSUCxTQUFTO29CQUNURixZQUFZO29CQUNaQyxTQUFTO29CQUNULHNCQUFzQjtvQkFDdEJLLFFBQVE7b0JBQ1IscUJBQXFCO29CQUNyQlYsUUFBUTtvQkFDUkUsTUFBTTtnQkFDUDtZQUNEO1lBQ0FZLGNBQWM7Z0JBQ2JDLElBQUk7Z0JBQ0pDLElBQUk7Z0JBQ0pDLElBQUk7WUFDTDtRQUNEO0lBQ0Q7SUFDQUMsU0FBUztRQUFDckM7S0FBbUI7QUFDOUIsRUFBbUIifQ==