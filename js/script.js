const API_BASE = "https://api.convertix.net.br";
const SITE_ID = 1;
const FALLBACK_PHOTO = "assets/geysy.png";

const ICONS = {
  WHATSAPP: {
    class: "whatsapp",
    svg: '<path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.068 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.926-7.926 0-2.125-.827-4.125-2.323-5.628zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.47 6.47 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.5 6.5 0 0 1 4.66 1.931 6.545 6.545 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.068-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.091-.09.197-.232.296-.347.1-.114.133-.198.198-.33.066-.134.033-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>',
  },
  INSTAGRAM: {
    class: "instagram",
    svg: '<path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4A5.8 5.8 0 0 1 16.2 22H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>',
  },
  LINKEDIN: {
    class: "linkedin",
    svg: '<path d="M4.98 3.5a1.98 1.98 0 1 1 0 3.96 1.98 1.98 0 0 1 0-3.96zM3.5 9h2.96v12H3.5V9zm5.46 0H11.9v1.64h.04c.51-.96 1.76-1.98 3.62-1.98 3.87 0 4.59 2.55 4.59 5.86V21H17.2v-6.48c0-1.55-.03-3.54-2.16-3.54-2.16 0-2.49 1.69-2.49 3.43V21H8.96V9z"/>',
  },
  TIKTOK: {
    class: "tiktok",
    svg: '<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.83a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.26z"/>',
  },
  YOUTUBE: {
    class: "youtube",
    svg: '<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>',
  },
  FACEBOOK: {
    class: "facebook",
    svg: '<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>',
  },
  X: {
    class: "x",
    svg: '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>',
  },
  TELEGRAM: {
    class: "telegram",
    svg: '<path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>',
  },
  DISCORD: {
    class: "discord",
    svg: '<path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.2252 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>',
  },
  SPOTIFY: {
    class: "spotify",
    svg: '<path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>',
  },
  PINTEREST: {
    class: "pinterest",
    svg: '<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>',
  },
  THREADS: {
    class: "threads",
    svg: '<path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.548 2.719C4.682 4.192 4.027 6.703 4.004 9.99v.015c.023 3.288.678 5.799 2.057 7.563 1.438 1.783 3.638 2.698 6.548 2.719 2.967-.022 5.236-.975 6.743-2.833 1.443-1.776 1.348-4.025 1.01-4.862-.317-.784-.873-1.35-1.651-1.683a6.5 6.5 0 0 1-.043 1.167c-.305 1.655-1.222 2.984-2.652 3.845-1.135.678-2.505.985-4.062.912-1.502-.069-2.797-.543-3.648-1.337-.865-.807-1.322-1.912-1.322-3.22 0-1.308.457-2.413 1.322-3.22.851-.794 2.146-1.268 3.648-1.337 1.557-.073 2.927.234 4.062.912 1.43.861 2.347 2.19 2.652 3.845.028.152.05.305.066.458 1.078.453 1.997 1.1 2.688 1.926.896 1.077 1.419 2.466 1.419 4.015 0 2.596-1.611 4.624-4.453 5.929-1.715.812-3.863 1.216-6.388 1.216zM10.306 10.933c-.922.042-1.684.337-2.142.831-.458.494-.688 1.149-.688 1.949 0 .8.23 1.455.688 1.949.458.494 1.22.789 2.142.831.922-.042 1.684-.337 2.142-.831.458-.494.688-1.149.688-1.949 0-.8-.23-1.455-.688-1.949-.458-.494-1.22-.789-2.142-.831z"/>',
  },
  SNAPCHAT: {
    class: "snapchat",
    svg: '<path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.078.029.16.045.241.045.234 0 .414-.135.414-.375 0-.12-.029-.24-.074-.359a1.686 1.686 0 0 0-.414-.659c-.135-.135-.359-.359-.509-.584-.135-.195-.195-.435-.195-.705 0-.435.359-.794.794-.794.12 0 .24.029.359.074.435.195.885.435 1.365.435.435 0 .794-.359.794-.794 0-.12-.029-.24-.074-.359-.135-.359-.359-.659-.659-.885-.435-.359-.885-.659-1.365-.885-.435-.195-.885-.359-1.365-.435-.435-.074-.885-.104-1.365-.104-.435 0-.885.029-1.365.104-.435.074-.885.195-1.365.435-.435.195-.885.435-1.365.885-.3.225-.524.525-.659.885-.045.12-.074.24-.074.359 0 .435.359.794.794.794.48 0 .93-.24 1.365-.435.12-.045.24-.074.359-.074.435 0 .794.359.794.794 0 .27-.06.51-.195.705-.15.225-.374.449-.509.584a1.686 1.686 0 0 0-.414.659c-.045.12-.074.24-.074.359 0 .24.18.375.414.375.081 0 .163-.016.241-.045.15-.06.327-.09.509-.09.12 0 .299.016.464.104.374.18.733.285 1.033.301.198 0 .326-.045.401-.09-.008-.165-.018-.33-.03-.51l-.003-.06c-.104-1.628-.23-3.654.299-4.847C16.853 1.069 13.196.793 12.206.793z"/>',
  },
  TWITCH: {
    class: "twitch",
    svg: '<path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>',
  },
  GITHUB: {
    class: "github",
    svg: '<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>',
  },
  BEHANCE: {
    class: "behance",
    svg: '<path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h8.976c1.584 0 3.122.571 4.076 1.732 1.042 1.275 1.077 3.093-.001 4.318-1.003 1.144-2.376 1.648-3.945 1.648H3.989v5.269zM3.989 9.918h4.373c1.518 0 2.469-.745 2.469-1.912 0-1.179-.951-1.912-2.469-1.912H3.989v3.824z"/>',
  },
  DRIBBBLE: {
    class: "dribbble",
    svg: '<path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.72C7.17 11.775 2.206 11.71 1.756 11.7l-.004.032c-1.15 2.082-1.8 4.468-1.8 7.01 0 2.763.896 5.318 2.405 7.396.002-.002 2.208-3.323 5.556-4.814zM1.836 11.218c.048-.002 5.157-.028 10.466-2.276-.376-.66-.77-1.305-1.17-1.922-5.138 1.5-10.646 1.414-11.113 1.414l-.002.045c-.323 2.152-.157 4.22.819 6.13v-.002c.002 0 .002-.002.002-.002zm2.826-7.981c.498 0 5.093.017 10.36-1.395-2.774-5.077-7.385-7.702-7.938-7.886-1.908 1.643-3.15 3.976-3.422 6.28zm10.922 4.209c4.094-1.582 6.192-4.015 6.436-4.38-1.423-1.102-3.238-1.882-5.332-2.23-.608 1.14-1.125 2.346-1.532 3.59 1.317.35 2.294.742 2.428.02z"/>',
  },
  MEDIUM: {
    class: "medium",
    svg: '<path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>',
  },
  SUBSTACK: {
    class: "substack",
    svg: '<path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>',
  },
  GOOGLE_MAPS: {
    class: "google-maps",
    svg: '<path d="M12 0C7.802 0 4.403 3.403 4.403 7.602c0 5.701 7.197 15.198 7.469 15.598a.403.403 0 0 0 .128.128.396.396 0 0 0 .512-.128c.272-.4 7.469-9.897 7.469-15.598C19.981 3.403 16.582 0 12 0zm0 11.2a3.598 3.598 0 1 1 0-7.196 3.598 3.598 0 0 1 0 7.196z"/>',
  },
  OUTROS: {
    class: "outros",
    svg: '<path d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2z"/>',
  },
};

const DEFAULT_ICON = ICONS.OUTROS;

async function carregarBioLink() {
  const response = await fetch(
    `${API_BASE}/api/v1/biolinks/publico?site_id=${SITE_ID}`
  );

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("NOT_FOUND");
    }
    throw new Error("FETCH_ERROR");
  }

  return response.json();
}

function buildPhotoUrl(fotoPerfil) {
  if (!fotoPerfil) return FALLBACK_PHOTO;
  return `${API_BASE}${fotoPerfil}`;
}

function formatHandle(nomeUsuario) {
  if (!nomeUsuario) return null;
  const trimmed = nomeUsuario.trim();
  if (trimmed.startsWith("@")) return trimmed;
  return `@${trimmed}`;
}

function createLinkIcon(icone) {
  const config = ICONS[icone] || DEFAULT_ICON;
  const iconEl = document.createElement("span");
  iconEl.className = `link-btn__icon link-btn__icon--${config.class}`;
  iconEl.setAttribute("aria-hidden", "true");

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", icone === "WHATSAPP" ? "0 0 16 16" : "0 0 24 24");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("aria-hidden", "true");
  svg.innerHTML = config.svg;

  iconEl.appendChild(svg);
  return iconEl;
}

function createLinkButton(item) {
  const link = document.createElement("a");
  link.className = "link-btn";
  link.href = item.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  const inner = document.createElement("span");
  inner.className = "link-btn__inner";
  inner.appendChild(createLinkIcon(item.icone));
  inner.appendChild(document.createTextNode(item.titulo));

  const arrow = document.createElement("span");
  arrow.className = "link-btn__arrow";
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "→";

  link.appendChild(inner);
  link.appendChild(arrow);

  return link;
}

function renderProfile(data) {
  const photo = document.querySelector(".profile__photo");
  const name = document.querySelector(".profile__name");
  const handle = document.querySelector(".profile__handle");
  const tagline = document.querySelector(".profile__tagline");
  const bio = document.querySelector(".profile__bio");
  const footer = document.querySelector(".footer__copy");

  const photoUrl = buildPhotoUrl(data.foto_perfil);

  if (photo) {
    photo.src = photoUrl;
  }

  if (handle) {
    const handleText = formatHandle(data.nome_usuario);
    if (handleText) {
      handle.textContent = handleText;
      handle.hidden = false;

      const instagramItem = data.itens.find((item) => item.icone === "INSTAGRAM");
      if (instagramItem) {
        handle.href = instagramItem.url;
      } else {
        handle.removeAttribute("href");
      }
    } else {
      handle.hidden = true;
    }
  }

  if (tagline) {
    tagline.hidden = false;
  }

  if (bio) {
    if (data.descricao) {
      bio.textContent = data.descricao;
      bio.hidden = false;
    } else {
      bio.hidden = true;
    }
  }

  document.title = `${name?.textContent || "Geyse Toledo"} | Link na Bio`;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && data.descricao) {
    metaDescription.setAttribute("content", data.descricao);
  }

  if (footer && name) {
    footer.textContent = `© ${new Date().getFullYear()} ${name.textContent} · Marketing Digital`;
  }
}

function renderLinks(itens) {
  const nav = document.querySelector(".links");
  if (!nav) return;

  nav.innerHTML = "";

  itens.forEach((item) => {
    nav.appendChild(createLinkButton(item));
  });
}

function updateWhatsAppFab(itens) {
  const fab = document.querySelector(".whatsapp-fab");
  if (!fab) return;

  const whatsapp = itens.find((item) => item.icone === "WHATSAPP");
  if (whatsapp) {
    fab.href = whatsapp.url;
    fab.hidden = false;
  } else {
    fab.hidden = true;
  }
}

function showError() {
  const main = document.querySelector(".container");
  const errorEl = document.querySelector(".error-state");

  if (main) main.hidden = true;
  if (errorEl) errorEl.hidden = false;

  document.title = "Página não encontrada | Link na Bio";
}

function showLoading() {
  document.body.classList.add("is-loading");
}

function hideLoading() {
  document.body.classList.remove("is-loading");
}

function initScrollReveal() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const profileItems = [
    document.querySelector(".profile__photo-wrap"),
    document.querySelector(".profile__name"),
    document.querySelector(".profile__handle:not([hidden])"),
    document.querySelector(".profile__tagline:not([hidden])"),
    document.querySelector(".profile__bio:not([hidden])"),
  ];

  profileItems.forEach((el, index) => {
    if (!el) return;
    el.classList.add("reveal");
    el.style.setProperty("--reveal-delay", `${index * 0.1}s`);
  });

  document.querySelectorAll(".section__title").forEach((el) => {
    el.classList.add("reveal");
  });

  document.querySelectorAll(".link-btn").forEach((el, index) => {
    el.classList.add("reveal");
    el.style.setProperty("--reveal-delay", `${index * 0.08}s`);
  });

  document.querySelectorAll(".history, .video-wrap, .video-caption, .footer").forEach((el) => {
    el.classList.add("reveal");
  });

  document.querySelectorAll(".course-card").forEach((el, index) => {
    el.classList.add("reveal");
    el.style.setProperty("--reveal-delay", `${index * 0.1}s`);
  });

  const fab = document.querySelector(".whatsapp-fab:not([hidden])");
  if (fab) {
    fab.classList.add("reveal");
    fab.style.setProperty("--reveal-delay", "0.55s");
  }

  const revealElements = document.querySelectorAll(".reveal");

  if (reducedMotion) {
    revealElements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -5% 0px",
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

async function init() {
  showLoading();

  try {
    const data = await carregarBioLink();
    renderProfile(data);
    renderLinks(data.itens);
    updateWhatsAppFab(data.itens);
    hideLoading();
    initScrollReveal();
  } catch (error) {
    hideLoading();
    if (error.message === "NOT_FOUND") {
      showError();
    } else {
      showError();
    }
  }
}

init();
