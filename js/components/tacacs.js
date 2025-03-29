Vue.component('tacacs', {
    props: ['config'],
    template: \`
        <div>
            <h3>Step 5: TACACS+ Servers</h3>
            <div class="help-section">
                <h5>Help</h5>
                <p>Configure TACACS+ servers for authentication and authorization. This is optional and can be skipped if not needed.</p>
            </div>
            <label class="form-label">Enable TACACS+:</label>
            <input type="checkbox" class="form-check-input" v-model="config.tacacs.enable" @change="$emit('update:config', config)">
            <div v-if="config.tacacs.enable">
                <label class="form-label">Primary TACACS+ Server IP:</label>
                <input type="text" class="form-control" v-model="config.tacacs.primaryIp" placeholder="e.g., 192.168.1.20" @input="$emit('update:config', config)">
                <label class="form-label">Primary Port:</label>
                <input type="text" class="form-control" v-model="config.tacacs.primaryPort" placeholder="49" @input="$emit('update:config', config)">
                <label class="form-label">Primary Shared Secret:</label>
                <input type="text" class="form-control" v-model="config.tacacs.primarySecret" placeholder="e.g., TacacsKey" @input="$emit('update:config', config)">
                <label class="form-label">Enable Secondary Server:</label>
                <input type="checkbox" class="form-check-input" v-model="config.tacacs.secondary" @change="$emit('update:config', config)">
                <div v-if="config.tacacs.secondary">
                    <label class="form-label">Secondary TACACS+ Server IP:</label>
                    <input type="text" class="form-control" v-model="config.tacacs.secondaryIp" placeholder="e.g., 192.168.1.21" @input="$emit('update:config', config)">
                    <label class="form-label">Secondary Port:</label>
                    <input type="text" class="form-control" v-model="config.tacacs.secondaryPort" placeholder="49" @input="$emit('update:config', config)">
                    <label class="form-label">Secondary Shared Secret:</label>
                    <input type="text" class="form-control" v-model="config.tacacs.secondarySecret" placeholder="e.g., TacacsKey2" @input="$emit('update:config', config)">
                </div>
                <label class="form-label">TACACS+ Group Name:</label>
                <input type="text" class="form-control" v-model="config.tacacs.groupName" placeholder="e.g., TACACS-SERVERS" @input="$emit('update:config', config)">
                <label class="form-label">Single Connection:</label>
                <select class="form-select" v-model="config.tacacs.singleConn" @change="$emit('update:config', config)">
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                </select>
                <label class="form-label">Command Authorization:</label>
                <select class="form-select" v-model="config.tacacs.cmdAuth" @change="$emit('update:config', config)">
                    <option value="1">Enable</option>
                    <option value="2">Disable</option>
                </select>
                <label class="form-label">Max Privilege Level:</label>
                <input type="number" class="form-control" v-model="config.tacacs.maxPriv" placeholder="15" @input="$emit('update:config', config)">
            </div>
            <div class="step-navigation">
                <button @click="$parent.currentStep = 'radius'">Previous</button>
                <button @click="$emit('next-step')" :disabled="config.tacacs.enable && (!config.tacacs.primaryIp || !config.tacacs.primarySecret || !config.tacacs.groupName)">Next</button>
            </div>
        </div>
    \`
});
