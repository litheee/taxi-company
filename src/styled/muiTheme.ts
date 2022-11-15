import { createTheme } from '@mui/material'

import ArrowDownIcon from 'public/icons/arrow-down.svg'

export const muiTheme = createTheme({
	components: {
		MuiTypography: {
			styleOverrides: {
				body1: {
					fontFamily: 'Ubuntu, sans-serif',
					fontSize: 15,
					fontWeight: 500,
					lineHeight: '17.24px',
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
					fontFamily: 'Ubuntu, sans-serif',
					fontSize: 15,
					fontWeight: 500,
					lineHeight: '17.24px',
					letterSpacing: 'normal',
					color: '#fff',
					padding: '5px 0',
					textTransform: 'none',

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
					transition: '0.3s',

					'.MuiSelect-select.MuiInputBase-input': {
						paddingRight: 37
					},

					'.MuiSelect-select[aria-expanded="true"]': {
						borderBottomLeftRadius: 0,
						borderBottomRightRadius: 0
					}
				},
				input: {
					width: '100%',
					height: 32,
					padding: '8px 10px',
					borderRadius: 5,
					background: 'var(--color-gray-200)',
					boxShadow: '2px 2px 8px rgba(37, 37, 37, 0.25)',
					color: '#fff',
					fontFamily: 'Ubuntu, sans-serif',
					fontSize: 14,
					lineHeight: '16px',
					letterSpacing: 'normal',
					boxSizing: 'border-box',

					'&::placeholder': {
						color: 'var(--color-gray-100)',
						opacity: '1',
						transition: '0.3s'
					},

					'&:hover::placeholder': {
						color: '#fff'
					}
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
					fontFamily: 'Ubuntu, sans-serif',
					fontSize: 14,
					lineHeight: '17.24px',
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
						background: 'transparent',

						'&:hover': {
							background: 'transparent'
						}
					}
				}
			}
		}
	}
})
