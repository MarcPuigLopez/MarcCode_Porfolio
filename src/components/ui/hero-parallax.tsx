

import React from "react";
import {
	motion,
	useScroll,
	useTransform,
	useSpring,
	MotionValue,
} from "framer-motion";

export const skillsImg = [
	{
		link: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABmklEQVR4nN2UvUoDQRDHU6qg4AMomEoFe1tFCCKW9mLAV/ADwTyANrYGLNKds4mIGEEkTZDzP3MKwWDhC4iFqIWlyuY0Xi63d2uu0oWBZXd2fzsf/81k/tUQ4hdR/JHO8GwEsOJmegDfxgBwlhbAxFVzihSKqSMg7MelqBB0rh/VBxPrdiwDIcC2GUCcDzqDkE0CuI471nHmECvm15DkOkOWaR+MCyY8RVlX55HkjIBrx50MOnuERR/Mp7Y18MrehDnckjsU6oh8C1CRKRDmokwUdoNn9B2xOe0ImbCRVAMhWbcSWbTYcCcEJ8ra6VPYaUesuGkBsBQbXS1/PahkJbJosaHWOGkMS1mWuiGy0AIQVwP+RZsU/YiN+Eav1Q5qfUIyIwqbTLwlSmb1ml8DeIEUFZIBAbGxwqM4MmryRQUjQvwQ7rr4FIXExoR3Vsy6o4Rk3Dc9Z+g9a5GZxCa/sFiRfQ/9wfUKqFt8jn5uCVmPsOr3PL/GXPomis9Z8ZqOPNPLuHQu+1HGvBD2WOFem57rNb3X06V/anwCz154evXh0tcAAAAASUVORK5CYII=",
		name: "HTML",
	},
	{
		link: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAADGklEQVR4nMVWS2sUQRBOVPTi+6CIXsRDFEHQgwgaxQf6AzwIigdz8qR4MpCD6EGUPMQnIiIBbzNVm4fBg5eNISa7VTXZkCxC4klwg/iKGNEkoiM107PbMxOyIQg2hGxvd9dXX9VXVVtT87+Xf8VfQhk6JEBtDCQCNMFIM8F/3SO1epA/6Pt+7aIAxJXjgjwkyH7VPyCPgI4t2Hg2m10mQLfjRviXIGUZ+IkA3WDge+GephNgbY7jLK0KwMjd0SNG+i4gjYNdgxvnul/oKKxl5MuC9NVyqGteoBgDoHzOyW1dCHvP9XaFbI1zwLfmy0FEfajgDGwuOsWVejb+fHxF8r79nSDdTObJc/NHUypKJpmR3ghSi54z8H0GKjHQpCB/ZqQpQcqRQ3UmAteSIKq+mOoCmaZUQw9sRzjDe63zn/2d/avK7x2qE6TZlA1X6u1ctBn0P1YC3ycTyECvK+dyOn6migsiMBPUUuhoS+UCMocX+CUjv6t4I0dieQNptJh2JM62G+cKasd8JpvJhFHUnVgSgR7ahnKY28JIv6OQ5Z7mVify+oORr2uoTWRKFpOQnl7Iu/mdVvI/aO1E9wacgfXx2OfPlEF8v1ZBBGVPCBSATKeZILWbvRcZstuFh3ROgEftwivbyMg2AR4LPiO1z8Ekygn1GZCLVmE9spzpCQrPsAnaiiNrjI1LjHzVRKYvKugKE6RWw2RWUDYN4/CGcgUDfdSQBaECemHAOi2mZ8PvuNfLeDv0ffSWgZvLINquLc+bjFyfWXI9QS41cIbP6xkBnazkjbuNA56RclP5XUYO1NhJC+dDELIpLS4P6JQl18caKmWo94tOcbkAf4rqQlAuBPIO8/Itkm9qzmiC7ZagBk0b0f2kgsTqwsjUnH8hl3ZHuTXsD8cAkpVvPBnVHJRj71JDHET2WUzfCtCIta9UenJpG1FZppod0sxIz8i6tFM8NseU7Kw6uEIgi1GkOuBeQbobTUaVaWoyIrVUBbAXA+8X5FdV5zsGCuNkn1vwClqFK/XqoaolmCnaZYFK4Z6bVaaL/rXyL9df04djmtQPo40AAAAASUVORK5CYII=",
		name: "Wordpress",
	},
	{
		link: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAADo0lEQVR4nM2VbWxTVRjHqwiLr8QvxOgnjYkGX4LM4DZNZqJR3Obgg2u3bEUEIshYJ4EiZkjnlCXIRmAUAYVNcAWS3gP7NMbWrWu7e3fOc05nxa7d7pauXV26vjFeNJHIPObMNCHGl774wX/yfDjP///cX57k3ns0mv+DPGc897ut7gFmZb1/LtEXfs4Q2jmyhllGPum5QFddkuD1VImz6MNZd3nOEGj/7kvc8X1Bj8Ru9CDGU3UJ0Zvk9JVCespzNCcA5/wueuyKo1dib14WD5foXI/Eui9L7IY4i77wRS5rCDF7V9A236FeibX1IXbbdp6tZEd8tf1WKOr7A9ImfJHLGsJa/Dtp62hJP2IBG2IyafGvp61jMrT4y22ITtgQDcKB0bdELmsINI932Sx0lR0xPiCxvXTfeDveN7YWmsc+G5Bou+i7LO58aB6/mBVANk0ug0/VbxwS2+1AlDusI0XQqHaxE3wxNKoX7AjeE/1BRD+CRvU0MXkfyXyLhoAOGgJ6pwQuJ6JJ2TRRBHumPhYebQh8K5/0vOBClDsROEWO7AloM4bQXcGj8gHPs7JEfx1CcJYYp3bQncGXhUd2BAxgnC6WJZiREb09cti7nBinzBkBvCbvEjCEOoetUDOMKFes7F1cH7KodTxvAVL/YyE2hLYriJ5f8BGphvqwpbtOXfDTEts68wr5YLqOSPQcluA3l3n0GbIlfCTlK9un7yWbw6cwglqCKBc5siVsoJtnFjZNS3hjZJdSG1wJCIJUomayKVIGGyKVd2ZgY+QruYM9TRG1AYIYNoTyYVPEmDYE9LEO9bCa5zbMPg/66FbQRzvdG+KP3pmh1bEqXBM9hqtnq7ym4HJ2gt0n5tLbomLucaKNdRFt/CTRxXdj7WwBe58t/qssq7i6lFQmV2Nt9HOiix0nuthFMf/vkNWJh0h5/EVezO/J6GWp4EtYeeIlMa/JVMO6xHqlJtqKS6/lK6WJx+zF0QdcpdceJiVzK1z62f3yunj2v5SU5KpYs/3gGB9smow5jVMB17awz2UMBQabJuID5lEu6yNf5w4pu6q3H/LN2w/6b9mP/zDfjxhP1eB+/89Da5K63CGFN5cplXEffuP6h0pl3OFAjDusbu7aOxlX1ibNvIIv0vwXYgW3nut+Us1T3kl0DUmMK/XTAfzqL6Vck8Nl9XfCZckm/IV/Hr+dzO3K/ScNPcUfxCXXLfi1n9L/srORScPv7nuCL81k6HecY10YPiz4rQAAAABJRU5ErkJggg==",
		name: "Astro",
	},
	{
		link: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAADA0lEQVR4nO1WW4hNYRQ+g3EZRI0hihelXMaDaFwiLzzgjTDKK5KIkhfXiDfRJE2URon2XuvMOEI8OMk0Y69v7ZkjRzJuuTyYiVzGJRO2/j0zp332ucw0c6ao+ep/2uv/17e+tf7v35HIIAbxP0FjWgIblUpyGowrynJeSQ6CsUKrtXhAk8NGJUhaleFlXYT3ynKsubZ5fEETx+PxYWCcypk4k8g7IdnseV5Rv5NrtRYrg9ITSI2wzGm50TLCVAvCEtMSZfkUjAMj5kSd0v4RYFwMVwiSP0p40qmKLuyOTVxMjAbjuLJ0BNR4rbYu7TMBN+osUsKXfJKD0CAsC1Kka7UcjEeBmF/KcjR+IT7SfK+vqx8Lwk0Q9ic4MbFHEmLLYiXZq6w7leWEktSF5TZJwDhsWdZQn0RMS/wbkq7cRzDugqUt0M7bfVLGJIKN5abP6UTkjrJOTpEnWauMD7kV1NV9IpCmEMtGsLQHKm0NHtx4tXGSuZ5gtITIXs9boWu7czXqrPGXrRUNVsOoXPFN1v1ZyvI4lCCuJLvA2ApGNVi+Br6/0JhOyDjIv/OEPWC8zZTLTLfcckk2dPc6iK6+V/m3JN/QsjyQWpmapYqmss4e9spsHrrkLMt1c0ByLYMI4Y0Z5qSVHJ6xSaM6HYSXgQ0/jGwuyRbjasp6QEnuZfqBnDOVZyVS504BYZVZbtSdmat9ESfqzPDZpbvdMyU5q7azPmklx6SI1mq5Ei6HFEk6tjM7MmBmQ/LNJ2PptBQRW1cqy6tA3Hdl2R70f+OAZoC9Q96QHknA+Dkj2TUDSSV8zjI87YhiW0C50rAPGFc0fQbjiDGern1Pe+V4QRjWyjoPjH3G90OK2GrpOD/O84pA2NGpQM6BlUh/YBnXY+wGy8/Awc9d25nfHWNmwPd3lt/hQTWOGSkE1NaK9GGVDhDOmKfZ3ATfuEL+ryQnI4VEk9VUBkK0d14hNdkMqyBQ0k2mDTmcrs3Yb0H+iPLBVNf52kmVslwycoOxLt+bMYhB/JP4C96vN0zkf7tiAAAAAElFTkSuQmCC",
		name: "Tailwind",
	},
	{
		link: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAADxElEQVR4nL2V3U9bdRjHH1/vGq+8U2+GMV5wi4nGGP8Eb0ZiSLwhwQvchYnxjsSEaYduYVvErQbYmJNqqXRGB+W0py/Qt9PTFgasFKpY1uxQkCalTU/bc8rX/H6O8tKz2jjjkzxp+jt9vp9fn7dD9H8agKcB9AD49D/wHqZnBDmnazoKucITu67pkCTpQhOkWq2O5LN5SNYwQhPBf+2SNQyuI0lOInr+BETTtM+Ku0WEbgYwe/7uY909LGDe4jN096U5hCYCKP5ZhCAIPxLRM6fT9aFaVCFZIy0h/us+yPaooXuuuiFZJVSKKmw223Wjmryn13TEpuSGoOuiwG9+3GVrFOvzqROeFO9ziHvYhZhdBtOxWCyDRpA3ASDuiDUgoVvBpttml7M4bfu5An8mfOVEYjrGzwYHB88ZQc6wh4s/J45Sc83bVNj0wnqjiyqlChfc29rjkLkLszyeWW9v71kjiIk9vPfLYts12fktxwVzG9uQp6Jwnp/B0q+L/Kyzs/Ntw4HUdV1dcS7D+cVMW5B8Ns8FsytZSD9EeByLr9VqFSLqNIRUq9Vsyr8G4UsnF/R+LbZVkz9im4jcDkEYcoLFFwqFHBG9aghRVTW+Gd3k/c4g4hW3AeRBE2QjsI7QrQBclwSweEVR1onoZUNIuVyeUZIPIV52t5UurapxyH33KgLj8/BccUFZU5BOp2UievFxkHHWKb5rXi7IuuWwq05DYtNy45/cu7uEeYufx+Uf7CEej7uJyGQI0TTt8/2dfQTHF7ggK+ThreeGnCcgy87lBoQBfd94ELwRAIsXRfEnInrOEALgo3KhjMjk0WqJ2qQGKPRdEEnXKkp7JRwcHHAAm+6/V4oIaTIMtVCG3W4fNQQ8gpzVKhpiU9Gj9Hzr5/vMqLvYMLIasHNx2AXZJvM6jY6OmltB3sEBEJ8+Wi2HztraO+JBUkwik8jwdB3vOuHiHI9j8Waz+eNWkNf5armTaKu7onYJ4dsh+C1eXj8Wx6y/v7+nFeSFer1eX/MmecrY7mIDdhziGxGxMLYA8aqbd58wNMu7SrZFweLq9bre1dX1LrUyRVEm2G1qag27mztY8ySRuBNH5PswzzsTFi+7+IZm6WGNsPv7Dv89M0mSZojoTEsIET3V19f3lsPhMKdSqVClUimxPJfyJWwtbWFVWOGf7Ds7r9VqaiaTWXY4HDe6u7vfJ6LXmMY/QY7bsx0dHS+NjY19EAwGJ7e3t9OaplUVRdkQRdE+MDDwiclkeoOIXml6nz+BsSnueOTGE21gfwFCWKUAV3IYOQAAAABJRU5ErkJggg==",
		name: "CSS",
	},
	{
		link: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAVklEQVR4nO3WsQkAIRBE0e2/Fyu535PmFy2iji7zwMTowxgYYXYj2td3nPcCYhEHUGYCfvfZx1Y3IKtuAOoJUAdk1Q1APQGnA2Y5gGcnQP0lQxVgFgcNwKvAp5M4PKcAAAAASUVORK5CYII=",
		name: "Elementor",
	},
	{
		link: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAqElEQVR4nO2UQQ6CMBREey70AngQ3eiaK3gX/+cgf8YTuJNwDTCQYEgglMSvIaaTzKJpO69/Fg0habOC4EBBRUX7sQWVlZZPIP3GzTKnB+8oeE4hijZ6WVEMjp2dzVsD4aiSn0GwMJkbhAuTbQvCSCgT5E/rErsOXrOOQqD26P6c4CCW3Hd5o3CcXH5enfdd7NhTvwWAWPNuB4oLxGpnQA3B2aP+pOCuF6JWgh8v6jcCAAAAAElFTkSuQmCC",
		name: "SEO",
	},
	{
		link: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABQUlEQVR4nO2WvU7DMBSFPSCEhMSLsDLBCzDxFoidkR0KKwLBxt9G7uUVvNb33EodKiYGkICpA/AABLlJaWlCwo8bCeEjeYjte/zJdpJjTFTUhHqXvVll2VOSR2WkIRpIHpSl5b1NnZRkN9TCBRDGTi0ABrRIJZFlE0ggrAx3onay5rShFv+2r0YAjkeAeAnT//0aTkt/F0AnCtsX7QVlOVXCixL6SnJsT+xcYwBKclb405HsNwiAZ//sErf4G5+fA7DcZX2y9aWAERzgyq2D5DXf+hthWWsUwKvDbhUk12NJZ8NM60OknxRaa2dA2MwA5DYYAPJI5mPUe5Ri3JfN7SRuKTsK9Ks9q30+yKfXYqrF9nAchMOS8YNRfVU6HvnUxfKW3wlP7IvGb3v3vDvvPz7K8jRoJEe+rwqgzCcqyuR6A3m9i+NHX+FyAAAAAElFTkSuQmCC",
		name: "JavaScript",
	},
	{
		link: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAADyElEQVR4nMVVW2icVRCO94Ja8KUiIuIF0QexolipiogFUSleqKKlvoiIL9aWQt9qFXy1llbBQkGNZc/5z3/ORiW0COISzZ6ZMzN/XdOItRRRWlrtTSEJpbmtzB+yJLtNNoLgPP3/ucw3M983c3p6/g9rbm9ejhnsQotZMmn9Quckl1Xi6S0OvM45d9mSAZKNghZGwcIwGJhAC+fIxrUtx17u5MAD4vkX8bSLAzMH3rkk543exgowcZoM3aT/tU9qyyADByZOgYPdUpUXONAprvIbs1E3QmMFezqnZ7sCoBl8Bmw835FVHl8EG6fU+cGA97TvS+DDqZru6ApAGW0AWx9rX+ccN0ejAHy8yNPjHfuBfkx9aWVXgLRvcGU09al5oIZWo4FJtLiJclotnk5IVW5rAzgFX8L1XQGazeal0dSnk4N3McN9KYMCTBzXNc2MPYkE+ls8HRVPOwpPr1OVnuRAI81m85IFHddqtWXgYAfYeAZMbEIlXsAMhtWprqHDrWTwlSJP95OnNRLoa/FUiKePtf4SeJI9H5CQnuuQbMrSxmjq42DjX8nhTrSQoYUT5OKjGrk4eFjPRRdvxM9xuX4XvrhZPJ8hT7eKJydBNoqX9eLpew78E3t+qHSODt9T8rASt8+VqjpGC6chg2/LIBz0a2YaqXjZomsSZFsZtafTw274mtn7hae1JU9Bnu5R8pKLr7WXDG08rNofODBwg0Zelm0GoATRTBq9jasl8EkJtLf9/owY+JgCTFBGr3YC4M8LAnieUIDBLwavZU9/iqfP2u+Ll8c40G89kMM2sHFcJTi3ROpcS4QWazM84VclgOcJDrx5xgm9LZ76lYuh/qHrWiWq0vMzwPJEi2SVIth4MmXwDlj4tEVypT4tOT6i5zQbjbqD5MC97Hkr5/yyBBqcR3KrJPtxOTrcAwZGNFK08TxkQGDjKJr62WRhi3Z50VfcpzJVcssh5/lD8XyIA2mXf6OzSvbIFYuOah126PB9yKAPMjhUZmdiq9F0sEngX9nzRxz4Tfb8lHgaO7L/yFU93QxyWKXKmpddwAehEid1HlFO94rnP4pqcdd8Uulo4YrbuwKootDE0fZ1tLhJ+0UC/S5enm3fl8B1qUrZkIsaVnDdxcY1WVqjmUngs9Ind7fvs+fGxcZ4h5W61y52eIv+O+euJAd7ywfHQoUCvdT+4KhEFXhuNy9qYOGHaOIYWhwCEy+ggRHKYMPsvtafA31XPpmBdqua9OlcknM1VVLK4AO0GJJLHWNk1rjKD6iKtLH+1aP/X9o/WvxO8WFaZtsAAAAASUVORK5CYII=",
		name: "React",
	},
	{
		link: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABDUlEQVR4nNWVz0rDQBjEe1HwtRQpWA8efCfjI/QV6nw+hIfoznxeJK/QQq/1olCqbECJmjabP1L9YA/Jwvx2MjtkNNrX+G04d4gyvrrp7WOVe5Xnch+im0/aiVdEfAfgy4JfJAFkUjcAQ5oDaNUNoNUfcWA+6QIQdJYE+ISAIe0WMbQS33sPillx6MZrBxcC5w5m8V078V0ZgFlNwFkyoOkWKZ76R8Ccpzto6IH6Ahp7gJpPZLwaLIMihgxm8dSdQm7qwf8Yh4/d+CDwpeogn+VHvcUfb8KJwE1dBoMAZLzbFnI+CABcbgGsfeoHv+cAfOotHsfNj+sykOlyEEAcmU4F3sv4XDY79Yf+bd4BgJbG6PbCH44AAAAASUVORK5CYII=",
		name: "Figma",
	},
	{
		link: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAADDUlEQVR4nO1XOWgVYRB+RlFM4YWihWCjKHhUCmKhIogIUVARsRFEFDtLQdAnEYw2hqClWpjK3ZkNSdQy8cC87MxsgknwiIKIFxg1XmCUxJXZI2/3JfHtW7OVDvyQLHN8/z8z38zL5f5LCuls7JwlSHWC9CI4dfotl7W4rjuFkQ8I8ltBdmMH+L0AHXPzblUmwR3TXstAhWJAuico673j/e1/Vx1CWjdpgTuMjnkC1CDIw0HgN/oK+hoxgEA7/HR4IH4J8rVCc2Fh6sDt7e3THKAjAjTg345+KpA/5VpapJqRTzPQUABkkJGP9xl90ysK7oC9UYB7izmmm11QWJbUXnXVJlIfveozkbFYsjd8bkZ6KpZdUxH6mC+7xvPhAxkmoD3ljZAeBbk+13+rf0buL0V9CNL5ICUPyxow0ogqaw1Ev2vR9dzomdvd1D2ntEjJpA2C9i7Hot2O6awpbUX1FbzoSFkAEuRtfPLx8vk5CDxTkK+MdkecE56U5nwiv6kBaIrC3AY8AALcLMAvg9t+cwxnaWYAGOmB/79si+oZhjHVA+PXUT5LAHf9m/J1smi7bdiLQl1CWqX9H+2gDADw1pBwIjT8UZDaBOWkA86SJH5TA1DRHAvSGUG+7wePFeN3QtqZCYAuo2uBEhabvDmmg52L2eT9AmSG3ZANAFCq9Z78tfL/GB8tMj/ohK+ZAHDzbpUgPw50+wTolIN0kC0+KkC1evNghrRlAiCnek2ymoGfjyGh4r7wTEBWZAZARcesUrCSEgNfFaTLjHxWi690BFcC4IMqKr+XA5BU/M3JX9vKKjNw/egCgnRRKz5WWECDiQOrDVADI/3wbbk+0fhk4EvFFYy/6Dhl5MZw50sQuFqQTgjSp3BeqM+Kxrtt2isZqLWE6YYEZctENjoHGPgQI7+K2LSqr1xaIZ31QBf0FUJHOorH3Nqya7yWLI5kIos2pQ48kZBBy3XNYuQ7OvOD/fF2tP0coH2lW/OkiVj2YUZ6N07fD+gPk4o34DTitWTIeN6hWjFkdipnuX9dfgO+gyaJEuIqgQAAAABJRU5ErkJggg==",
		name: "Node",
	},
	{
		link: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB0UlEQVR4nLWVz6tNURTHzxMDA0UGBkpJZiYG8mNsoJSJgRhI/AGGhigmMjDzI8qboHPW96IMhFzpdu893++6rp4RISIkKeWRH9na992n1HEf+x7f4VrrrM/aZ6+1dpb9gxy+wU1vvOGrsrrVztsLZew4FBw8W2vycDDMc2Pu0HeHbsr4Q9Du2gCCDg0qN+5vNpvz3XhD4BcWXDt2cs99hUOf3Tg5a5u6NrXETS/c9MBP+4LxAMZJN0738/by3+zwrTOnKvckJ29daS2K1Qs6UQkHu4IehRAmkgA9445YZa9Rbqzyq9DO6Ce4Lgng4HmHXscuqvL3L/cXO/hV0OFUQCu25cgY0504H2kA4yuZzswRc0rQy0SAvjl4ZFSMTEcd+pQK+PCnDvoVAx6X8X0igKXA63MALrjpYRoAOifw7ahpjXMg6FISoIdyy6DPjdur/ATXRL9M+9K3KPQ0tmvVtLrposCPcTclAQZVFtxbVaUXvn64to9l4yiEMCHoVtxJLLgp2jpXO8sEPnPwedxX2bgqG+VSNz520zuC22S6H39NLe/BrLp5d6VDT4YPzzSNm7O6JejA4D7Au7Unj3LzXcNH//Z/AdyzzuqZu+DJv/3oJ2yrY6IlVho9AAAAAElFTkSuQmCC",
		name: "Mongo",
	},
	{
		link: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAC8ElEQVR4nO1WS2sUQRAOanwrnvwF4luMokIEAyqI/0jxQVB8ksREoiGrB0HFw2zVrnpQPMheQtiuqkkWs76C+ADjVYyIMYlZqZme7OzszO5GxYPsBwNDV3fVV19XV3dLSxNNNBHBCOZ3ClK/IL0UoG8CPClAzwSp2824W6LzBeimIJcEKe84zuKWOih1lhYJ0pCuYeAb84bxR+PLBGiQkX76DmM+4BkG7pWUtAbr8nfyawXpg+cQ+Vg9AgJy3M79OJodXecNFp3iUgZ66hvoBwNfdzOmvegUV8tDWUlIexm5j4GmLPPHuVxuSeDUTZvDDDSndkLanhRcFRTk7zrXRXO0zMqTXDOkT4KyO8mByZo2BpqwkneHbYycskqNhBUKoIQFmGycwXnDiJPfKsizmnmt4KFs9wjStH4mYzYG44XbhVUC9MaSOxFdx8AnrcLvh+4PrSlnD3TFLhqoF7w6W7ocHheUQ95WaDJZ2REnvaTlSIUzAR5TZ5Sm/Y0SkLQcsEU5WmVDGghvRVh6ra1qZ8CTatRqbpSAVq/vkD5HbeGtYOBTgnLa/r+rkL7MmEt/8sUqBHIw2Ar/VNGcjsXLiX+fgIKBr5XnUX+inFLH0e9CgDrLDYw6/ykBkzVteky1q/qdlaZ1LIEpf1loEdaCVj0DiW23fQJ01RZhQTtuHIGxhR7DWhCgs1bVt0ErZ+RxS+hM9QKkngU3IuC7NquuJOldMB3BuCan3VYvM+2kEcay2bvlGm3FYDq8Y4U86zruhmBc5fWvbS+ZnhhlvI7LyM9zt3LLKzNC7rONZSKxWGzwoGYE6FJElfO2O74edoZXRNdqUA1uCZ6rZJeSVkF6YklMeVdvhvfp/hWwsF57vCDdm38rAD8IX8eUpl2B9NqmExPImPZgK/SKrybhV+xsnQdJVzi4/5DxCzlaE3HQa9wm+qJqKxQmbbbZ/Soy0lfvWab/wL3k0KYYhxctwVdx0kfhEUYu2nq4UG9+E038//gFNZeYg83/228AAAAASUVORK5CYII=",
		name: "Express",
	},
	{
		link: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABDElEQVR4nOWVTQ6CMBCFu4Z4A72I0b3xevi3duuMGhPjBVzgzJhwBl2Ap8AUjaJQLNSVNpkdfV9feTNV6qeXbMQTpECAE0FOHwWcMPAomke+GwApeBF+Kw1xBHBMC+rKUnoGSOwKSDPxhfRNLtwBWF357xjoIkCz/Xrf+hpUlR0EaFbYqBMhSJNCYtDeQd5JAcDA4zrCcovryXSVRes1Ty7ApyMeBrSijh2gVIi2IYZt0//Q4gy8awzQ4gw8FOBzTXeJFeB+dfXETR2eZdgmglhZsXFG6ezaAFTTpbtPgKb5NNk6aAytAuSHoBsADP3xHIJuE5U/djgFToBoHvkZpORVyx6kjXhOAPX36wquQAz0vsHdDgAAAABJRU5ErkJggg==",
		name: "Python",
	},
	{
		link: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAADPklEQVR4nOVXbahlYxTeXIQxykgo8YsQUiKiFNNoEiUpkfI5RRlEDH4MJYNIPmtMGYZf71lr3zFGSXSU07lnP8+zb7dx/EA0PhqUH0YixNHa5+zpzDQ12veeucVTq7PPu/e717PW+65nvTvL/gsYDAYHbNu67ahFI9BP/UNkWrNoBOh8gMZXFiX1cjxEx180Xrhfnc+8NXOsHO/IOZDhiYrQ2sGBQUSOu5V04sScy3SZjN+HcxpfikzAsJyOz2X4qLTypIk5h+FqGf+sInc8XTl3nEvH7zS+qfU6OJsk5PhqlPYNY2MvxNhEI68h46fD6HV8PUbnI0NSui6bNJTrmiGB4qp6rJu6y2TYIUdv4gQCcq2W8eOU0tTYMtwRJLL9BRiWl46b6v80Piwvrl9wRymlKeY8j8575FiHHCvnNs0tiXv91D+irv/xPbGLZI6VNL5K4/0h140IyNEZrnlVdvfN2szJRV4c3W63Dxp/rvdG78gQH+W6aFwVQzNCKWW6tyEBra4EZheJvRn+kPMLGj6Q48nO5s7S3d5h2EHnxmxemm94UI6Xy+nynHGLqOvNuDcRKlvlWTT8LcNd85Ner6L9VYZWVfemNdEDQg3lNDq20/ltabiintdN3cNonJMRcd2YQEppSq5bZXhPxh/3XAIafoh7UQllXp4Wc+KAIsdrMqzVFh3e2Pk45Lo8HM2m2WPCilQcF7s7fmXFjXBcWz8b+yCqI1tIqFI7Duj4Rc4+nZ/JuHO3bDifyiYF5LhYjmkZv5Hzt8qqtoyODM+rpRULEvXcprkldD4qw1Y610ftN3lPmRcXNCIgxzOjdL7ftL8X08XZcn7XiACNt4wE5qeq3KZ15r+ZV6lhSytofHa4T7Auawo4rpTxw0pGq17Pn+n8hI53ZUi10bmFxq6cXw4llztpzMtWcem4GKGFmxsR6WzuLJXrfOXFbXQ+HqefOIKPCGwI6Y0sRQkWeXFKqGY9d1ieeG4kRMsaEWjv0XT2hZ73ToDhBhreHlXIY3X3bEZgY/tQOM4IiaXzzqonmG4vDauqg0l8FxhfHFYMtsv4tQyvB4l5Od7HZ9ipcSCpTa5LZlPv9AWT3Oz/hH8A5r7v926JWw8AAAAASUVORK5CYII=",
		name: "Java",
	},
];

export const HeroParallax = ({
	products,
}: {
	products: {
		title: string;
		link: string;
		description: string;
		thumbnail: string;
		mobileThumbnail: string;
		skills: string[];
	}[];
}) => {
	const firstRow = products.slice(0, 2);
	const secondRow = products.slice(2, 4);
	const ref = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

	const translateX = useSpring(
		useTransform(scrollYProgress, [0, 1], [-700, 1600]),
		springConfig
	);
	const translateXReverse = useSpring(
		useTransform(scrollYProgress, [0, 1], [1500, -1100]),
		springConfig
	);
	const rotateX = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [15, 0]),
		springConfig
	);
	const opacity = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
		springConfig
	);
	const rotateZ = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [20, 0]),
		springConfig
	);
	const translateY = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [-400, 100]),
		springConfig
	);
	return (
		<div
			ref={ref}
			className="md:h-[160rem] lg:h-[100rem] xl:h-[110rem] 2xl:h-[120rem] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
			<Header />
			<motion.div
				style={{
					rotateX,
					rotateZ,
					translateY,
					opacity,
				}}
				className="">
				<motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
					{firstRow.map((product) => (
						<ProductCard
							product={product}
							translate={translateX}
							key={product.title}
						/>
					))}
				</motion.div>
				<motion.div className="flex flex-row  mb-20 space-x-20 ">
					{secondRow.map((product) => (
						<ProductCard
							product={product}
							translate={translateXReverse}
							key={product.title}
						/>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
};

export const Header = () => {
	return (
		<div className="">
			<div id="Projects" aria-hidden className="absolute top-0"></div>
			<div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
				<h1 className="text-2xl md:text-7xl font-bold dark:text-white">
					My Projects <br />
				</h1>
				<p className="max-w-2xl text-base md:text-xl mt-8 text-justify dark:text-neutral-200">
					Aquí encontrarás algunos de los proyectos en los que he trabajado. Haz
					clic en las imagenes para obtener más detalles. <br />
				</p>
			</div>
		</div>
	);
};

export const ProductCard = ({
	product,
	translate,
}: {
	product: {
		title: string;
		link: string;
		description: string;
		thumbnail: string;
		mobileThumbnail: string;
		skills: string[];
	};
	translate: MotionValue<number>;
}) => {
	return (
		<motion.div
			style={{
				x: translate,
			}}
			whileHover={{
				y: -20,
			}}
			key={product.title}
			className="group/product relative flex-shrink-0
						h-[40rem] 
						md:h-[40rem] 
						lg:h-[20rem] 
						xl:h-[25rem] 
						2xl:h-[30rem] 

						w-[21rem] 
						md:w-[21rem] 
						lg:w-[35rem] 
						xl:w-[42rem] 
						2xl:w-[50rem] 
						">
			<a href={product.link} target="_blank" rel="noopener noreferrer" className="block group-hover/product:shadow-2xl ">
				<img
					src={product.mobileThumbnail}
					className="visible lg:invisible object-cover object- absolute h-full w-full inset-0"
					width="600"
					height="600"
					loading="lazy"
					alt={product.title}
				/>
				<img
					src={product.thumbnail}
					className="invisible lg:visible object-cover object- absolute h-full w-full inset-0"
					width="600"
					height="600"
					loading="lazy"
					alt={product.title}
				/>
			</a>
			<div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-70 bg-black pointer-events-none"></div>
			<div className="absolute bottom-0 p-5 pb-10  w-full opacity-0 group-hover/product:opacity-100 text-white bg-black transition-all pointer-events-none">
				<div className="">
					<h2 className="">{product.title}</h2>
					<h3 className="pl-5 text-sm">{product.description}</h3>
					<div className="pt-5 mb-15">
						<h2> Skills </h2>
						<h3 className="text-white text-center">
							<div className="flex space-x-5 justify-evenly">
								{product.skills.map((skill) => (
									<>
										{skillsImg.map((img) => {
											if (img.name === skill) {
												return (
													<div className="flex-col items-center content-center justify-center">
														<img
															key={product.title + img.name}
															loading="eager"
															className="mx-auto mb-1 mt-3"
															src={img.link}
															alt={skill}
														/>
														<h4 className="text-white text-center text-sm">{skill}</h4>
													</div>
												);
											} else return;
										}, [])}
									</>
									// <img
									// 	loading="lazy"
									// 	className="mx-auto mb-1 mt-3"
									// 	src=""
									// 	// alt={skillsImg.filter(name => )}
									// />
								))}
							</div>
						</h3>
					</div>
				</div>
			</div>
		</motion.div>
	);
};
