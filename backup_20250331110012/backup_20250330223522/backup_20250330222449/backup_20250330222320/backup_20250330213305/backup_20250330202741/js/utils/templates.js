/**
 * Template utility functions
 */

// Generate a comment based on platform syntax
function generateComment(platform, text) {
    switch (platform) {
        case 'IOS-XE':
        case 'NX-OS':
        case 'CISCO-WLC':
            return `! ${text}\n`;
        case 'JUNOS':
            return `# ${text}\n`;
        case 'ARUBA-SWITCH':
        case 'ARUBA-WLC':
            return `; ${text}\n`;
        default:
            return `# ${text}\n`;
    }
}

// Format date based on platform 
function formatDate(platform) {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    return now.toLocaleDateString('en-US', options);
}

// Generate banner text for configuration
function generateBanner(platform, hostname) {
    const date = formatDate(platform);
    let banner = '';
    
    switch (platform) {
        case 'IOS-XE':
        case 'NX-OS':
            banner = `banner motd ^
=======================================================================
          Configuration generated by Dot1Xer Supreme 2.0
          Device: ${hostname}
          Date: ${date}
=======================================================================
^
`;
            break;
        case 'JUNOS':
            banner = `set system login message "=======================================================================\\n          Configuration generated by Dot1Xer Supreme 2.0\\n          Device: ${hostname}\\n          Date: ${date}\\n======================================================================="
`;
            break;
        case 'ARUBA-SWITCH':
        case 'ARUBA-WLC':
            banner = `banner motd "=======================================================================
          Configuration generated by Dot1Xer Supreme 2.0
          Device: ${hostname}
          Date: ${date}
======================================================================="
`;
            break;
        default:
            banner = `# Generated by Dot1Xer Supreme 2.0
# Device: ${hostname}
# Date: ${date}
`;
    }
    
    return banner;
}

// Generate a section header
function generateSectionHeader(platform, title) {
    let header = '';
    const lineLength = 70;
    
    switch (platform) {
        case 'IOS-XE':
        case 'NX-OS':
        case 'CISCO-WLC':
            header = `!\n! ${title}\n! ${'='.repeat(lineLength - 4)}\n!\n`;
            break;
        case 'JUNOS':
            header = `#\n# ${title}\n# ${'='.repeat(lineLength - 4)}\n#\n`;
            break;
        case 'ARUBA-SWITCH':
        case 'ARUBA-WLC':
            header = `;\n; ${title}\n; ${'='.repeat(lineLength - 4)}\n;\n`;
            break;
        default:
            header = `\n# ${title}\n# ${'='.repeat(lineLength - 4)}\n\n`;
    }
    
    return header;
}

// Export template utility functions
window.templateUtils = {
    generateComment,
    formatDate,
    generateBanner,
    generateSectionHeader
};
