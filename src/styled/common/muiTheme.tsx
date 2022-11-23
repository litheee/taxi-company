import { createTheme } from '@mui/material'

import ArrowDownIcon from 'public/icons/arrow-down.svg'
import CheckboxIcon from 'public/icons/checkbox.svg'
import CheckboxCheckedIcon from 'public/icons/checkbox-checked.svg'

export const muiTheme = createTheme({
	components: {
		MuiTypography: {
			styleOverrides: {
				body1: {
					fontFamily: 'var(--font-ubuntu), sans-serif',
					fontSize: 15,
					fontWeight: 500,
					lineHeight: '17px',
					letterSpacing: 'normal'
				}
			}
		},
		MuiButtonBase: {
			defaultProps: {
				disableRipple: true,
				disableTouchRipple: true
			}
		},
		MuiAccordion: {
			defaultProps: {
				disableGutters: true,
				square: true
			},
			styleOverrides: {
				root: {
					display: 'flex',
					flexDirection: 'column',
					background: 'transparent',
					boxShadow: 'none'
				}
			}
		},
		MuiAccordionSummary: {
			styleOverrides: {
				content: {
					width: '100%',
					margin: 0
				}
			}
		},
		MuiPopover: {
			defaultProps: {
				anchorOrigin: {
					vertical: 'bottom',
					horizontal: 'left'
				}
			},
			styleOverrides: {
				paper: {
					marginTop: 10,
					padding: '15px 10px',
					boxShadow: 'none',
					borderRadius: 5,
					backgroundColor: 'var(--color-gray-300)',
					color: '#fff',
					boxSizing: 'border-box'
				}
			}
		},
		MuiTabs: {
			defaultProps: {
				TabIndicatorProps: {
					style: {
						display: 'none'
					}
				}
			},
			styleOverrides: {
				root: {
					width: '100%',
					minHeight: 'auto',
					padding: 2
				}
			}
		},
		MuiTab: {
			defaultProps: {},
			styleOverrides: {
				root: {
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flex: '1 1 0',
					maxWidth: '100%',
					minWidth: 'auto',
					minHeight: 'auto',
					fontFamily: 'var(--font-ubuntu), sans-serif',
					fontSize: 15,
					fontWeight: 500,
					lineHeight: '17px',
					letterSpacing: 'normal',
					color: '#fff',
					padding: '5px 0',
					textTransform: 'none',
					transition: '0.3s',

					'&.Mui-selected': {
						background: 'var(--color-gray-200)',
						color: '#fff'
					},

					'&:first-of-type': {
						borderTopLeftRadius: 5,
						borderBottomLeftRadius: 5
					},

					'&:last-of-type': {
						borderTopRightRadius: 5,
						borderBottomRightRadius: 5
					}
				}
			}
		},
		MuiTextField: {
			defaultProps: {
				fullWidth: true,
				variant: 'standard'
			}
		},
		MuiInput: {
			defaultProps: {
				disableUnderline: true
			}
		},
		MuiInputBase: {
			defaultProps: {
				fullWidth: true
			},
			styleOverrides: {
				root: {
					width: '100%',
					height: 32,
					padding: '8px 0',
					borderRadius: 5,
					background: 'var(--color-gray-200)',
					boxShadow: 'var(--box-shadow)',
					fontFamily: 'var(--font-ubuntu), sans-serif',
					fontSize: 14,
					lineHeight: '16px',
					boxSizing: 'border-box',
					transition: '0.3s',

					'.MuiSelect-select.MuiInputBase-input': {
						paddingRight: 32
					},

					'.MuiSelect-select[aria-expanded="true"]': {
						borderBottomLeftRadius: 0,
						borderBottomRightRadius: 0
					}
				},
				input: {
					padding: '0 10px',
					color: '#fff',
					fontFamily: 'var(--font-ubuntu), sans-serif',
					fontSize: 14,
					lineHeight: '16px',
					letterSpacing: 'normal',

					'&::placeholder': {
						color: 'var(--color-gray-100)',
						opacity: '1',
						transition: '0.3s'
					},

					'&:hover::placeholder': {
						color: '#fff'
					}
				},
				inputAdornedEnd: {
					paddingRight: 10
				},
				adornedEnd: {
					paddingRight: 10
				}
			}
		},
		MuiSelect: {
			defaultProps: {
				variant: 'standard',
				MenuProps: {
					PaperProps: {
						style: {
							marginTop: 0,
							background: 'var(--color-gray-200)',
							boxShadow: '2px 5px 5px rgba(0, 0, 0, 0.25)',
							borderRadius: '0px 0px 5px 5px'
						}
					}
				},
				IconComponent: ArrowDownIcon
			},
			styleOverrides: {
				select: {
					minHeight: 'auto',
					boxSizing: 'border-box',
					background: 'var(--color-gray-200)',

					'&:focus': {
						borderRadius: 5
					}
				},
				icon: {
					right: '10px',
					transition: '0.3s',

					['path']: {
						stroke: 'var(--color-gray-100)'
					}
				}
			}
		},
		MuiList: {
			defaultProps: {
				disablePadding: true
			}
		},
		MuiMenuItem: {
			defaultProps: {
				disableGutters: true
			},
			styleOverrides: {
				root: {
					padding: 0,
					fontFamily: 'var(--font-ubuntu), sans-serif',
					fontSize: 14,
					lineHeight: '17px',
					letterSpacing: 'normal',
					color: '#b3b6b9',
					transition: '0.3s',

					'&:hover': {
						color: '#fff',
						background: 'transparent'
					},

					'&:not(:last-of-type)': {
						marginBottom: 15
					},

					'&.Mui-selected': {
						color: '#fff',
						background: 'transparent !important',

						'&:hover': {
							background: 'transparent'
						}
					}
				}
			}
		},
		MuiButton: {
			defaultProps: {
				variant: 'text'
			},
			styleOverrides: {
				root: {
					minHeight: 31,
					padding: '7px 10px',
					background: 'var(--color-gray-200)',
					boxShadow: 'var(--box-shadow)',
					borderRadius: '5px',
					textTransform: 'unset',
					fontFamily: 'var(--font-ubuntu)',
					fontWeight: 500,
					fontSize: 15,
					lineHeight: '17px',
					color: '#fff',
					boxSizing: 'border-box',
					transition: '0.3s'
				},
				startIcon: {
					marginLeft: 0,
					marginRight: 10
				},
				endIcon: {
					marginLeft: 10,
					marginRight: 0
				}
			}
		},
		MuiCheckbox: {
			defaultProps: {
				icon: <CheckboxIcon />,
				checkedIcon: <CheckboxCheckedIcon />
			},
			styleOverrides: {
				root: {
					padding: 0,
					borderRadius: 'none'
				}
			}
		},
		MuiInputLabel: {
			defaultProps: {
				shrink: true,
				variant: 'standard'
			},
			styleOverrides: {
				root: {
					position: 'static',
					maxWidth: '100%',
					marginBottom: 10,
					fontFamily: 'var(--font-ubuntu)',
					fontSize: 15,
					fontWeight: 500,
					lineHeight: '17px',
					color: '#fff',
					transform: 'none',
					letterSpacing: 'normal',
					whiteSpace: 'normal',

					'& + div': {
						marginTop: '0 !important'
					},

					'&.Mui-focused': {
						color: '#fff'
					}
				}
			}
		}
	}
})
