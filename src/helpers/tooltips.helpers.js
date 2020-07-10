const tooltips = (desc) => {
    const long = desc.length > 21;
    const text = desc.length <= 21
        ? desc
        : desc.slice(0, 8) + "..." + desc.slice(-8);
    return {text, long}
}

export default tooltips