import React from 'react';
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Button } from "@radix-ui/themes";
import { CaretDownIcon } from '@radix-ui/react-icons';
import "../styles.css";

function LanguageDropdown() {
  const [lang, setLang] = React.useState("English");

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button
          size="3"
          variant="surface"
          radius="large"
          aria-label="Customise options"
        >{lang}
          <CaretDownIcon width="18" height="18" style={{padding: "0"}}/>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Item onSelect={() => setLang("English")}>English</DropdownMenu.Item>
          <DropdownMenu.Item onSelect={() => setLang("French")}>French</DropdownMenu.Item>
          <DropdownMenu.Item onSelect={() => setLang("Spanish")}>Spanish</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default LanguageDropdown;