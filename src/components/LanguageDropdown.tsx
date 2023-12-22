import * as DropdownMenu from "@radix-ui/react-dropdown-menu";


function LanguageDropdown() {
    return (
        <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button aria-label="Customise options">
            Lang
          </button>
        </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content>
                <DropdownMenu.Item>English</DropdownMenu.Item>
                <DropdownMenu.Item>…</DropdownMenu.Item>
                <DropdownMenu.Item>…</DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}

export default LanguageDropdown;