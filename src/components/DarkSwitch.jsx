import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

export default function CustomDarkSwitch() {
	return (
		<Switch
			defaultSelected
			size="lg"
			color="secondary"
			startContent={<SunIcon />}
			endContent={<MoonIcon />}
			id="themeToggle"></Switch>
	);
}
