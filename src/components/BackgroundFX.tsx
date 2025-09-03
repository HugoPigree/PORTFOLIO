export default function BackgroundFX() {
    return (
        <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
            {/* gradient blob gauche */}
            <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl opacity-40
                      bg-gradient-to-br from-primary to-accent animate-float" />
            {/* gradient blob droite */}
            <div className="absolute top-40 -right-28 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-30
                      bg-gradient-to-tr from-accent to-primary animate-float" style={{animationDelay:"-4s"}} />
            {/* bruit fin */}
            <div className="bg-noise" />
        </div>
    );
}
