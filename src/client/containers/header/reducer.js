export const toggleNav = (state = { isToggled: true}) => {
    return {isToggled: !state.isToggled};
};
